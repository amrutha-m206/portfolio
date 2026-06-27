import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <h2> Amrutha M</h2>
            <div className="social-icons">
                      <a href="https://github.com/amrutha-m206" target="_blank" rel="noreferrer"> <FaGithub /></a>
                      <a href="https://linkedin.com/in/amrutha-m-297573279" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                      <a href="mailto:amrutha.m273@gmail.com"><FaEnvelope /></a>

            </div>
               <a href="#home" className="back-to-top"><FaArrowUp /></a>

                <p>© 2026 Amrutha M. All Rights Reserved.</p>
        </footer>
    );
}
export default Footer
