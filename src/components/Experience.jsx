import "./Experience.css";

function Experience(){
    const Experience=[
             {
      role: "Backend Intern",
      company: "Hyperface",
      duration: "Jan 2026 – May 2026",
      location: "Bangalore",
      points: [
        "Implemented RSA-based encryption for authentication flows, developed and made changes to key backend services in cluding customer lookup, transaction APIs, and core banking integrations.",
"Migrated services to Kafka-based asynchronous processing with dedicated topics for webhooks, card events, and bulk operations; authored integration/unit tests and resolved production issues"
      ]
    },

    {
      role: "Intern",
      company: "Broadrange AI",
      duration: "Aug 2024 – Feb 2025",
      location: "Remote (USA)",
      points: [
        "Built an AI-powered RFP Response Generator using OCR (Tesseract), SpaCy, and Llama 3.1, automating proposal drafting and structured information extraction.",
" Developed a full-stack workflow for reviewing generated responses and implemented PDF generation using ReportLab for export-ready proposals."
      ]
    },

    {
      role: "Project Intern",
      company: "Nokia",
      duration: "Jun 2024 – Sep 2024",
      location: "Bangalore (Remote)",
      points: [
        "Developed an automated vulnerability analysis pipeline using Grype and Syft to generate SBOMs and identify vulnerable Go dependencies with remediation details.",
        "Built a dependency upgrade framework leveraging web scraping and the Libraries.io API to recommend and apply secure package versions automatically."
      ]
    },

    {
      role: "GRM Project Intern",
      company: "IBM",
      duration: "Jan 2025",
      location: "Remote",
      points: [
        "Analyzed enterprise compliance datasets to generate actionable insights and automate reporting workflows, reducing manual effort.",
        "Developed a web-based dashboard for compliance monitoring, report visualization, and stakeholder access to key metrics."
      ]
    }
  ];

  return(
    <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="timeline">
            {Experience.map((exp,index)=>(
                  <div className="timeline-item" key={index}>

            <div className="timeline-content">

              <h3>{exp.role} @ {exp.company}</h3>

              <span>{exp.duration} | {exp.location}</span>

              <ul>
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

            </div>

          </div>
            ))}
        </div>
    </section>
  )
}
export default Experience;