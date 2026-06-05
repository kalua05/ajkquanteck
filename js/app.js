// js/app.js - DEBUGGED VERSION
function loadHomePreviews() {
  try {
    const edu = window.PORTFOLIO_DATA?.education || [];
    const eduContainer = document.getElementById('edu-preview');
    if (eduContainer) {
      eduContainer.innerHTML = edu.map((e, i) => `
        <div class="glass-card p-6 reveal" style="animation-delay: ${i * 0.1}s">
          <div class="text-4xl mb-2">${e.flag}</div>
          <h3 class="text-lg font-bold text-accent">${e.degree}</h3>
          <p class="text-sm text-muted">${e.uni}</p>
        </div>
      `).join('');
    }
    
    const proj = window.PORTFOLIO_DATA?.projects?.slice(0, 2) || [];
    const projContainer = document.getElementById('proj-preview');
    if (projContainer) {
      projContainer.innerHTML = proj.map((p, i) => `
        <div class="glass-card p-6" style="animation-delay: ${i * 0.1}s">
          <h3 class="text-lg font-bold">${p.title}</h3>
          <p class="text-muted text-sm mt-2">${p.summary}</p>
          <div class="flex flex-wrap gap-2 mt-3">
            ${(p.tech || []).slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }
    
    const radarCtx = document.getElementById('radarChart')?.getContext('2d');
    if (radarCtx && window.Chart) {
      try {
        new Chart(radarCtx, {
          type: 'radar',
          data: {
            labels: ['Portfolio Opt', 'Derivatives', 'Econometrics', 'ML', 'Python', 'Risk'],
            datasets: [{
              data: [92, 85, 94, 87, 92, 88],
              borderColor: '#00f0b4',
              backgroundColor: 'rgba(0, 240, 180, 0.1)',
              borderWidth: 2,
              pointBackgroundColor: '#00f0b4'
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                ticks: { color: 'rgba(255, 255, 255, 0.6)' }
              }
            }
          }
        });
      } catch (e) {
        console.error('Chart error:', e);
      }
    }
    
    const skills = window.PORTFOLIO_DATA?.skills || {};
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
      skillsGrid.innerHTML = ['quant', 'libraries', 'ml'].map((g, gi) => {
        const titles = { quant: 'Quant Methods', libraries: 'Libraries', ml: 'ML' };
        return `
        <div class="glass-card p-5">
          <h4 class="font-bold text-accent mb-3">${titles[g]}</h4>
          ${(skills[g] || []).map(s => `
            <div class="mt-2">
              <div class="flex justify-between text-sm mb-1">
                <span>${s.name}</span>
                <span class="text-accent">${s.level}%</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-fill" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>`;
      }).join('');
    }
  } catch (e) {
    console.error('Error loading previews:', e);
  }
}

const fab = document.getElementById('ai-fab');
const panel = document.getElementById('ai-panel');
if (fab) fab.onclick = () => panel?.classList.toggle('hidden');
document.getElementById('close-ai')?.addEventListener('click', () => panel?.classList.add('hidden'));

document.getElementById('ai-send')?.addEventListener('click', async () => {
  const input = document.getElementById('ai-input');
  const msg = input?.value?.trim();
  if (!msg) return;
  
  const msgsDiv = document.getElementById('ai-messages');
  msgsDiv.innerHTML += `<div class="text-right"><span class="inline-block bg-accent/20 p-2 rounded-xl">${msg}</span></div>`;
  input.value = '';
  
  const reply = await askAI(msg);
  msgsDiv.innerHTML += `<div><span class="inline-block bg-white/10 p-2 rounded-xl">${reply}</span></div>`;
  msgsDiv.scrollTop = msgsDiv.scrollHeight;
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHomePreviews);
} else {
  loadHomePreviews();
}
