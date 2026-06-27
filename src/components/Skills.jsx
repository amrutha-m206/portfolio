import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode
} from "react-icons/fa";

import {
  SiSpringboot,
  SiExpress,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiHibernate,
  SiCplusplus,
  SiApachekafka
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Fundamentals of Python", icon: <FaPython /> },
    // { name: "JavaScript", icon: <FaJs /> },
    { name: "Basics of React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Hibernate with JPA", icon: <SiHibernate /> },
    // { name: "Flask", icon: <SiFlask /> }, //once u learn fast api we mgith require
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Apache Kafka", icon: <SiApachekafka /> },
{ name: "Data Structures & Algorithms", icon: <FaCode /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    // { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  return (
    <section id="skills" className="skills">

      <h2>Technologies & Tools</h2>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;