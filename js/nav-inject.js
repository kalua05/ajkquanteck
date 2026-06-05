(function() {
  const base = location.pathname.includes('/pages/') ? '../' : '';
  const navHTML = `<nav class="fixed top-0 w-full z-50 bg-[#0a0f1f]/80 backdrop-blur-xl border-b border-accent/20">
    <div class="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
      <a href="${base}index.html" class="text-2xl font-bold">AK<span class="text-accent">.</span></a>
      <ul class="hidden md:flex space-x-6">
        <li><a href="${base}index.html">Home</a></li>
        <li><a href="${base}pages/about.html">About</a></li>
        <li><a href="${base}pages/education.html">Education</a></li>
        <li><a href="${base}pages/experience.html">Experience</a></li>
        <li><a href="${base}pages/projects.html">Projects</a></li>
        <li><a href="${base}pages/skills.html">Skills</a></li>
        <li><a href="${base}pages/certifications.html">Certs</a></li>
        <li><a href="${base}pages/jobs.html">Jobs</a></li>
        <li><a href="${base}pages/contact.html">Contact</a></li>
        <li><a href="${base}admin/index.html" class="text-accent3">Admin</a></li>
      </ul>
    </div>
  </nav><div class="h-16"></div>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
