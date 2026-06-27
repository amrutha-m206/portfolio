import "./Hero.css";
import profile from "../assets/img.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero(){
    return(
        <section id="home" className="hero">
            <div className="hero-image">
               <img src={profile} alt="Profile" />
            </div>
            <div className="hero-content">
                  <h3>Hello, I'm</h3>

                    <h1>Amrutha M</h1>

                    <h2>Software Developer</h2>

                    <p>
                    Passionate about Backend Development, AI/ML and building full stack
                    applications.
                    </p>

                    <div className="hero-actions">

                       <div className="hero-buttons">
                          <a href="/Amrutha_M.pdf" download>
                            <button>Download Resume</button>
                            </a>
                       </div>
                     <div className="social-icons">

                    <a href="https://github.com/amrutha-m206" target="_blank" rel="noopener noreferrer"> <FaGithub size={28} /></a>

                    <a href="https://www.linkedin.com/in/amrutha-m-297573279" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>

                    <a href="mailto:amrutha.m273@gmail.com"><FaEnvelope size={28} /></a>

                    </div>
                </div>
            </div>
            
        </section>
    );
}
export default Hero;