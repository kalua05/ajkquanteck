window.PORTFOLIO_DATA = {
  personal: {
    name: "Ajeet Kumar", email: "ajeetk095@gmail.com", phone: "+91 8756543310",
    location: "Bangalore, India", linkedin: "https://linkedin.com/in/ajeek095",
    github: "https://github.com/ajeetk095", leetcode: "https://leetcode.com/u/Ajeetk095/",
    photo: "assets/img/profile.jpg", resume_link: "assets/docs/resume.pdf",
    summary: "MSc Financial Engineering (WorldQuant, 87%) · M.Tech CSE (NSUT, 7.92) · B.Tech IT (AKTU, 7.19). Industry internships at Algo8.ai (IIT Kanpur) and Amul GCMMF. JP Morgan quant & IB simulations. 1st place IIT Kanpur hackathon (2019). Open for quant research, risk analytics, financial engineering roles."
  },
  education: [
    { id: "wqu", degree: "MSc Financial Engineering", uni: "WorldQuant University, USA", period: "Oct 2023 – Present", score: "87% · Proficient", flag: "🌐" },
    { id: "nsut", degree: "M.Tech Computer Science & Engineering", uni: "NSUT Delhi", period: "2021–2023", score: "CGPA 7.92/10", flag: "🏛️" },
    { id: "aktu", degree: "B.Tech Information Technology", uni: "AKTU Lucknow", period: "2017–2021", score: "CGPA 7.19 (Sem VIII 9.54)", flag: "🏛️" }
  ],
  experience: [
    { id: "amul", role: "Market Research & Development Analyst Intern", company: "Amul GCMMF Ltd.", location: "Amul Kanpur", period: "Oct 2020 – Jan 2021", type: "internship", icon: "🥛", bullets: ["Consumer research across 25+ UP cities","Analysed regional sales data → targeted strategies","Delivered actionable insights for distribution"] },
    { id: "algo8", role: "Data Science Intern", company: "Algo8.ai Pvt. Ltd.", location: "SIDBI Extension, IIT Kanpur", period: "Jan 2020 – May 2020", type: "internship", icon: "🤖", bullets: ["AI model for Electronic Bottle Inspection (defect detection)","Automated defect detection using OpenCV","End-to-end data collection & preprocessing"] },
    { id: "iitk-ml", role: "Summer Training – Machine Learning Trainee", company: "E&ICT Academy, IIT Kanpur", location: "IIT Kanpur", period: "Jun–Jul 2019 (6 weeks)", type: "training", icon: "🏛️", bullets: ["ML Fundamentals, Supervised/Unsupervised","Feature Engineering, Model Evaluation","Ensemble Learning, ML Deployment"] },
    { id: "jpm-quant", role: "Quantitative Research Simulation", company: "J.P. Morgan (Forage)", location: "Virtual", period: "Jul–Oct 2023", type: "simulation", icon: "🏦", bullets: ["Price data analysis, commodity storage contract pricing","Credit risk analysis, FICO score bucketing"] },
    { id: "jpm-ib", role: "Investment Banking Virtual Program", company: "J.P. Morgan (Forage)", location: "Virtual", period: "Jul 2023", type: "simulation", icon: "💼", bullets: ["M&A target screening, auction process","Financial analysis (DCF), investment recommendation"] }
  ],
  projects: [
    { id: "mvo", title: "Portfolio Optimization & Fama-French 5-Factor", summary: "Markowitz MVO on 10 US stocks + Fama-French 5F regression (OLS). Monte Carlo validation.", tech: ["Python","cvxpy","statsmodels"], problem: "Construct optimal diversified portfolio with factor exposure.", dataset: "10 US large-caps (Yahoo Finance)", methods: "MVO, OLS, Fama-French 5F, Monte Carlo", results: "Max Sharpe 1.4, Vol 11%, Factor R² 0.78" },
    { id: "bl", title: "Black-Litterman, Kelly Criterion & MVO", summary: "Multi-strategy framework for 10 assets, 5k+ Monte Carlo trials.", tech: ["NumPy","SciPy"], problem: "Compare Bayesian, growth-optimal, and mean-variance approaches.", dataset: "Simulated returns", methods: "Black-Litterman, Kelly, MVO", results: "Half-Kelly best growth/drawdown trade-off" },
    { id: "lw", title: "ML-Enhanced Portfolio with Covariance Denoising", summary: "Ledoit-Wolf shrinkage on 12-asset portfolio, CVaR & Calmar evaluation.", tech: ["scikit-learn","cvxpy"], problem: "Estimation error in sample covariance.", dataset: "12 asset daily returns", methods: "Ledoit-Wolf shrinkage, CVaR", results: "Sharpe 0.92 → 1.21, CVaR -17%" },
    { id: "hack", title: "Telecom Loan Default Prediction (1st Place IITK)", summary: "Random Forest + PCA, recall-optimised. Won Algo8 Hackathon IIT Kanpur 2019.", tech: ["scikit-learn","imbalanced-learn"], problem: "Credit risk with imbalanced classes.", dataset: "Telecom usage & payment history", methods: "Random Forest, PCA, SMOTE", results: "1st place, recall 85%" }
  ],
  skills: {
    quant: [{ name: "Markowitz MVO", level: 92 }, { name: "Black-Litterman", level: 85 }, { name: "Fama-French 5F", level: 88 }, { name: "Ledoit-Wolf", level: 82 }, { name: "CVaR / VaR", level: 88 }, { name: "Monte Carlo", level: 90 }],
    libraries: [{ name: "NumPy", level: 92 }, { name: "pandas", level: 90 }, { name: "scikit-learn", level: 87 }, { name: "cvxpy", level: 85 }, { name: "statsmodels", level: 88 }, { name: "OpenCV", level: 80 }],
    ml: [{ name: "Random Forest", level: 87 }, { name: "PCA", level: 85 }, { name: "Reinforcement Learning", level: 70 }, { name: "Deep Learning", level: 82 }]
  },
  certifications: [
    { name: "SEBI Investor Certification", issuer: "SEBI/NISM", date: "May 2024 (PASS 49 marks)", cat: "Finance" },
    { name: "Risk Management & Insurance Planning", issuer: "CFI", date: "Jul 2023", cat: "Finance" },
    { name: "Pre-MBA Statistics", issuer: "IIM Ahmedabad (Coursera)", date: "Sep 2023", cat: "Data" },
    { name: "What is Data Science?", issuer: "IBM (Coursera)", date: "Feb 2020", cat: "Data" },
    { name: "Introduction to AI", issuer: "IBM (Coursera)", date: "May 2020", cat: "ML" },
    { name: "Python for Everybody", issuer: "Univ. Michigan", date: "Jul 2020", cat: "Programming" },
    { name: "Google Cloud Fundamentals", issuer: "Google Cloud", date: "Mar 2020", cat: "Cloud" },
    { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", date: "Dec 2020", cat: "Networking" },
    { name: "CCNAv7: Switching & Wireless", issuer: "Cisco", date: "Mar 2021", cat: "Networking" },
    { name: "CCNAv7: Enterprise Networking", issuer: "Cisco", date: "Apr 2021", cat: "Networking" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "May 2021", cat: "Networking" },
    { name: "Azure Fundamentals (11 modules)", issuer: "Microsoft", date: "Sep 2023", cat: "Cloud" },
    { name: "Tableau 2024 A-Z", issuer: "Udemy", date: "Jul 2024", cat: "Data" },
    { name: "MySQL Bootcamp", issuer: "Udemy", date: "Jul 2024", cat: "Database" },
    { name: "ChatGPT Prompt Engineering", issuer: "Udemy", date: "Jul 2024", cat: "AI" },
    { name: "IAENG Membership #265771", issuer: "IAENG", date: "Jul 2020", cat: "Membership" },
    { name: "Algo8 Hackathon – 1st Place", issuer: "IIT Kanpur", date: "Jun 2019", cat: "Award" },
    { name: "ICT ML Training (IITK)", issuer: "E&ICT Academy", date: "Jul 2019", cat: "ML" },
    { name: "Python Practical Approach", issuer: "IIT Kanpur", date: "Jul 2019", cat: "Programming" },
    { name: "Commodity Derivatives Webinar", issuer: "NCDEX + IITK", date: "Jul 2020", cat: "Workshop" },
    { name: "IEEE Winter School – Fog/Edge", issuer: "IEEE & IITK", date: "Dec 2020", cat: "Workshop" },
    { name: "3D Math with Excel Workshop", issuer: "IIT Kanpur", date: "Jul 2019", cat: "Workshop" },
    { name: "Ethical Hacking Workshop", issuer: "IEMLabs", date: "Jul 2020", cat: "Workshop" },
    { name: "Geocomputation (ISRO)", issuer: "IIRS, ISRO", date: "Oct 2020", cat: "Workshop" },
    { name: "CloudSummit.NXT 2020", issuer: "IncubateIND", date: "Oct 2020", cat: "Conference" },
    { name: "Rajya Purashkar Scout Award", issuer: "NVS", date: "Aug 2013", cat: "Award" },
    { name: "3rd Place Quiz – JIMMC Fest", issuer: "JIMMC Noida", date: "Feb 2015", cat: "Award" },
    { name: "Regional Kabaddi Meet – Merit", issuer: "NVS Lucknow", date: "Apr 2011", cat: "Sports" },
    { name: "ISSTF Volunteer – IIT Kanpur", issuer: "IIT Kanpur", date: "Jan 2020", cat: "Volunteering" }
  ],
  blog: [
    { title: "Portfolio Optimization Suite", tag: "GitHub", date: "2025-01-15", summary: "Complete Python implementation of MVO, Black-Litterman, Kelly Criterion.", link: "https://github.com/ajeetk095" },
    { title: "Ledoit-Wolf Shrinkage Explained", tag: "LinkedIn", date: "2025-01-10", summary: "Why your covariance matrix is lying and how to fix it.", link: "https://linkedin.com/in/ajeek095" }
  ],
  gallery: [
    { title: "IIT Kanpur Hackathon – 1st Place", type: "image", src: "assets/img/hackathon.jpg", cat: "awards" },
    { title: "President of India Felicitation", type: "image", src: "assets/img/president.jpg", cat: "awards" }
  ]
};
function loadData(key) { return PORTFOLIO_DATA[key] || []; }
function saveData(key, val) { PORTFOLIO_DATA[key] = val; localStorage.setItem('portfolio_'+key, JSON.stringify(val)); }
