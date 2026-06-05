// Load previews on homepage
function loadHomePreviews() {
  const edu = PORTFOLIO_DATA.education;
  const eduContainer = document.getElementById('edu-preview');
  if(eduContainer) eduContainer.innerHTML = edu.map(e => `<div class="glass-card p-6"><div class="text-3xl">${e.flag}</div><h3 class="text-xl font-bold">${e.degree}</h3><p class="text-muted">${e.uni}</p><p class="text-accent">${e.score}</p></div>`).join('');
  const proj = PORTFOLIO_DATA.projects.slice(0,2);
  const projContainer = document.getElementById('proj-preview');
  if(projContainer) projContainer.innerHTML = proj.map(p => `<div class="glass-card p-6"><h3 class="text-xl font-bold">${p.title}</h3><p class="text-muted text-sm mt-1">${p.summary}</p><div class="flex flex-wrap gap-2 mt-3">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('');
  // Skills radar chart
  const ctx = document.getElementById('radarChart')?.getContext('2d');
  if(ctx) new Chart(ctx, { type: 'radar', data: { labels: ['Portfolio Opt','Derivatives','Econometrics','ML','Python','Risk'], datasets: [{ data: [92,85,94,87,92,88], borderColor: '#00f0b4', backgroundColor: 'rgba(0,240,180,0.2)' }] }, options: { responsive: true } });
  // Skill bars
  const skills = PORTFOLIO_DATA.skills;
  const groups = [{key:'quant',title:'Quant Methods'},{key:'libraries',title:'Libraries'},{key:'ml',title:'ML'}];
  const skillsGrid = document.getElementById('skills-grid');
  if(skillsGrid) skillsGrid.innerHTML = groups.map(g => `<div class="glass-card p-5"><h4 class="font-bold text-accent">${g.title}</h4>${skills[g.key].map(s => `<div class="mt-2"><div class="flex justify-between text-sm"><span>${s.name}</span><span>${s.level}%</span></div><div class="skill-bar-bg"><div class="skill-fill" style="width:${s.level}%"></div></div></div>`).join('')}</div>`).join('');
}
// AI chat
const fab = document.getElementById('ai-fab');
const panel = document.getElementById('ai-panel');
if(fab) fab.onclick = () => panel.classList.toggle('hidden');
document.getElementById('close-ai')?.addEventListener('click', () => panel.classList.add('hidden'));
document.getElementById('ai-send')?.addEventListener('click', async () => {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if(!msg) return;
  const msgsDiv = document.getElementById('ai-messages');
  msgsDiv.innerHTML += `<div class="text-right"><span class="inline-block bg-accent/20 p-2 rounded-xl">${msg}</span></div>`;
  input.value = '';
  const reply = await askAI(msg);
  msgsDiv.innerHTML += `<div><span class="inline-block bg-white/10 p-2 rounded-xl">${reply}</span></div>`;
  msgsDiv.scrollTop = msgsDiv.scrollHeight;
});
document.getElementById('ai-input')?.addEventListener('keypress', e => { if(e.key === 'Enter') document.getElementById('ai-send').click(); });
// Run previews on load
document.addEventListener('DOMContentLoaded', loadHomePreviews);
