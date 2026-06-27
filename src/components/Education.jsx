import "./Education.css";

function Education(){
    const education=[
            {
            degree: "B.Tech (Hons) in Computer Science",
            institute: "RV University, Bengaluru",
            duration: "2022 – 2026",
            score: "CGPA: 9.63"
            },
            {
            degree: "PU-2",
            institute: "Deeksha Center for Learning, Bengaluru",
            duration: "2022",
            score: "97.5%"
            },
            {
            degree: "10th Grade",
            institute: "RNS International School, Bengaluru",
            duration: "2020",
            score: "93.8%"
            }
    ];

    return(
        <section id="education" className="education">
            <h2>Education</h2>
            <div className="edu-container">
                 {education.map((item, index) => (
          <div className="edu-card" key={index}>

            <h3>{item.degree}</h3>

            <p className="inst">{item.institute}</p>

            <p className="dur">{item.duration}</p>

            <p className="score">{item.score}</p>

          </div>
        ))}
            </div>
        </section>
    )
}
export default Education;