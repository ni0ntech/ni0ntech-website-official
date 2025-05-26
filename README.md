# ni0ntech.com — Personal Brand Website

**Live Site:** [https://www.ni0ntech.com](https://www.ni0ntech.com)  
**Author:** Joshua Rubio | Cybersecurity Professional & AI Builder

---

## 💡 Overview

This is my personal website, built from scratch and hosted on **AWS Amplify** with domain and security powered by **Cloudflare**. It serves as a central hub for showcasing my work in information security, machine learning, AI automation, and technical content development.

The site is fully static, fast-loading, responsive, and mobile-optimized. It includes project showcases, downloadable resume, service pages, and a professional contact form — soon to be wired up with **AWS Lambda + SES**.

---

## 🧩 Current Stack

| Layer      | Technology            |
|------------|------------------------|
| Hosting    | AWS Amplify            |
| Storage    | S3 (HTML/CSS/JS)       |
| DNS / SSL  | Cloudflare             |
| Frontend   | HTML5, CSS3, Vanilla JS |
| Contact    | (Planned) AWS Lambda + SES |
| Domain     | ni0ntech.com           |

---

## 📄 Pages

| Page          | Path              | Description |
|---------------|-------------------|-------------|
| Home          | `/`               | Landing page, about, capabilities |
| Resume        | `/resume.html`    | Embedded PDF + download button |
| Portfolio     | `/portfolio.html` | Grid of 9 clickable Jupyter Notebook projects |
| AI Agents     | `/ai.html`        | Custom automation services |
| InfoSec Ops   | `/infosec.html`   | InfoSec service offerings |
| Contact       | `/contact.html`   | Form (to be wired with SES + Lambda) |
| 404 Fallback  | `/404.html`       | Custom error page w/ styling and CTA |

---

## 💻 Projects Featured

Each project card links to a corresponding `.ipynb` notebook under `/portfolio/`, including:
- Threat Hunter’s Toolkit
- Resume Analyzer
- SOC Analyst Simulator
- AWS Credit Scoring Model
- Fraud Detection API
- Security Awareness Bot
- Alert Prioritization System
- DynamoDB Contact Tracker
- NI0N.AI Demo Agent

---

## 📦 Deployment Pipeline

- Code is pushed to GitHub
- Auto-deployed via AWS Amplify CI/CD
- HTTPS and domain routing managed by Cloudflare
- Custom 404 page configured in Amplify

---

## ✉️ In Progress: AWS Lambda + SES Integration

The contact form will be connected to:
- AWS API Gateway (accept form submissions)
- AWS Lambda (validate + process)
- Amazon SES (send message to verified domain inbox)

---

## 🧠 Goals

- Showcase a professional, real-world AWS architecture
- Demonstrate frontend + cloud infrastructure fluency
- Support job hunting, client outreach, and networking

---

## 🔐 Security Notes

- All communication served over HTTPS
- Contact form will use SES with Lambda and CORS
- No cookies, tracking, or JS frameworks

---

## 📎 Credits

This project was handcrafted using nothing but my laptop, caffeine, and pure determination. No template. No boilerplate. 100% hands-on.

---

## 📬 Contact

For collaboration, hiring, or mentoring:
**[ni0ntech.com/contact.html](https://www.ni0ntech.com/contact.html)**
