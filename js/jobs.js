const ADZUNA_APP_ID = "fd15a1de";
const ADZUNA_APP_KEY = "ba2de9bbc0174edd2e8bcd29227d6aa2";
async function fetchJobs(query = "quantitative analyst", country = "in") {
  const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&what=${query}&results_per_page=6`)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results?.map(j => ({ id: j.id, title: j.title, company: j.company.display_name, location: j.location.display_name, salary: j.salary_min ? `${j.salary_min/1000}k` : "N/A", match: Math.floor(Math.random()*30+65), link: j.redirect_url })) || [];
  } catch(e) { return []; }
}
