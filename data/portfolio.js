window.PORTFOLIO_DATA = {
  personal: {
    name: "Ajeet Kumar", email: "ajeetk095@gmail.com", phone: "+91 8756543310",
    location: "Bangalore, India", linkedin: "https://linkedin.com/in/ajeek095",
    github: "https://github.com/ajeetk095", leetcode: "https://leetcode.com/u/Ajeetk095/",
    photo: "assets/img/profile.jpg", resume_link: "assets/docs/resume.pdf",
    summary: "MSc Financial Engineering (WorldQuant, 87%) · M.Tech CSE (NSUT, 7.92) · B.Tech IT (AKTU, 7.19)"
  },
  education: [
    { id: "wqu", degree: "MSc Financial Engineering", uni: "WorldQuant University, USA", period: "Oct 2023 – Present", score: "87% · Proficient", flag: "🌐", transcript: ["Financial Markets 81%","Financial Econometrics 94% ★","Derivative Pricing 88%","Deep Learning 95% ★","Risk Management 95% ★"] },
    { id: "nsut", degree: "M.Tech Computer Science & Engineering", uni: "NSUT Delhi", period: "2021–2023", score: "CGPA 7.92/10", flag: "🏛️", transcript: ["Advanced Data Structures: B+","Computer Vision: A","Distributed Systems: A","Cloud Computing: A","Dissertation A+"] },
    { id: "aktu", degree: "B.Tech Information Technology", uni: "AKTU Lucknow", period: "2017–2021", score: "CGPA 7.19 (Sem VIII 9.54)", flag: "🏛️", transcript: ["Machine Learning: B+","AI: B","Cloud: B","Project A+"] }
  ],
  experience: [
    { id: "algo8", role: "Data Science Intern", company: "Algo8.ai (IIT Kanpur)", location: "SIDBI Extension", period: "Jan–May 2020", type: "internship", icon: "🤖", bullets: ["EBI defect detection using OpenCV","Predictive maintenance","Reduced testing time"] },
    { id: "amul", role: "Market Research Analyst", company: "Amul GCMMF", location: "Kanpur", period: "Oct 2020–Jan 2021", type: "internship", icon: "🥛", bullets: ["Consumer research 25+ cities","Sales analytics","Regional strategy"] },
    { id: "iitk-ml", role: "ML Trainee (IIT Kanpur)", company: "E&ICT Academy", location: "IIT Kanpur", period: "Jun–Jul 2019", type: "training", icon: "🏛️", bullets: ["Supervised/Unsupervised learning","Micro delinquency prediction"] },
    { id: "jpm-quant", role: "Quant Research Simulation", company: "J.P. Morgan (Forage)", location: "Virtual", period: "Jul–Oct 2023", type: "simulation", icon: "🏦", bullets: ["Commodity pricing","Credit risk","FICO bucketing"] }
  ],
  projects: [
    { id: "mvo", title: "Markowitz MVO + Fama-French 5F", summary: "10-asset US portfolio, OLS regression.", tech: ["Python","cvxpy"], problem: "Construct optimal diversified portfolio.", results: "Sharpe 1.4" },
    { id: "bl", title: "Black-Litterman vs Kelly vs MVO", summary: "Multi-strategy framework.", tech: ["NumPy","SciPy"], problem: "Compare Bayesian vs growth-optimal.", results: "Half-Kelly best" },
    { id: "lw", title: "Ledoit-Wolf Covariance Denoising", summary: "12-asset risk, Sharpe +31%.", tech: ["scikit-learn"], problem: "Estimation error.", results: "Sharpe 1.21" }
  ],
  skills: {
    quant: [{ name: "Markowitz MVO", level: 92 }, { name: "Black-Litterman", level: 85 }, { name: "CVaR", level: 88 }],
    libraries: [{ name: "NumPy", level: 92 }, { name: "pandas", level: 90 }, { name: "scikit-learn", level: 87 }],
    ml: [{ name: "Random Forest", level: 87 }, { name: "PCA", level: 85 }]
  },
  certifications: [
    { name: "SEBI Investor Certification", issuer: "SEBI/NISM", date: "May 2024", cat: "Finance" },
    { name: "JP Morgan Quant Research", issuer: "J.P. Morgan", date: "Oct 2023", cat: "Finance" },
    { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", date: "Dec 2020", cat: "Networking" },
    { name: "Azure Fundamentals", issuer: "Microsoft", date: "Sep 2023", cat: "Cloud" },
    { name: "Pre-MBA Statistics", issuer: "IIM Ahmedabad", date: "Sep 2023", cat: "Data" },
    { name: "1st Place Hackathon IITK", issuer: "Algo8", date: "Jun 2019", cat: "Award" }
  ],
  blog: [
    { title: "Portfolio Optimization Suite", tag: "GitHub", date: "2025-01-15", summary: "Python implementation.", link: "https://github.com/ajeetk095" }
  ],
  gallery: [
    { title: "IIT Kanpur Hackathon", type: "image", src: "assets/img/hackathon.jpg", cat: "awards" }
  ]
};
function loadData(key) { return PORTFOLIO_DATA[key] || []; }
function saveData(key, val) { PORTFOLIO_DATA[key] = val; localStorage.setItem('portfolio_'+key, JSON.stringify(val)); }
