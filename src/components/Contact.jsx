import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            event.target.reset();
        } else {
            setResult("Failed to send message.");
        }
    };

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
                        <a
                            href="https://www.linkedin.com/in/amrutha-m-297573279"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/amrutha-m-297573279
                        </a>
                    </div>

                    <div className="info">
                        <FaGithub />
                        <a
                            href="https://github.com/amrutha-m206"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/amrutha-m206
                        </a>
                    </div>

                </div>

                <form className="contact-form" onSubmit={onSubmit}>

                    <input
                        type="hidden"
                        name="subject"
                        value="New Portfolio Contact"
                    />

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                    <p className="result">{result}</p>

                </form>

            </div>
        </section>
    );
}

export default Contact;