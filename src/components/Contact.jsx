import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact(){
     return(
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info">
                      <h3>Let's Connect!</h3>

                <p>
                    I'm always open to discussing software engineering opportunities,
                    collaborations, or interesting projects.
                </p>

                <div className="info">
                    <FaEnvelope />
                      <a href="mailto:amrutha.m273@gmail.com">
                    <span>amrutha.m273@gmail.com</span>
                    </a>
                </div>

               <div className="info">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/amrutha-m-297573279" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/amrutha-m-297573279
                </a>
                </div>

                <div className="info">
                <FaGithub />
                <a href="https://github.com/amrutha-m206" target="_blank" rel="noopener noreferrer">
                    github.com/amrutha-m206
                </a>
                </div>
            </div>
                <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                />

                <textarea
                    rows="6"
                    placeholder="Your Message"
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

                </form>

            </div>
        </section>
     );
}
export default Contact;