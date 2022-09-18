import "./ContactSection.css";

import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";

import photo from '../assets/casual-600w.jpg';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="info-container">
                    <h2 className="contact-heading">Contact Me</h2>
                    <p className="contact-detail">{contactMeString}</p>
                    <p className="contact-detail">Toronto, Ontario</p>
                    <p className="contact-detail"><span>
                        <Icon path={mdiEmail} size="2em" className="email-logo" />
                        </span>tyerooth@gmail.com</p>
                    <div className="logos-container">
                        <a href="https://github.com/TyeRooth" target="_blank" rel="noopener noreferrer">
                            <Icon path={mdiGithub} size="5em" />
                        </a>
                        <a href="https://www.linkedin.com/in/tyerooth" target="_blank" rel="noopener noreferrer">
                            <Icon path={mdiLinkedin} size="5em" /> 
                        </a>
                    </div>
                </div>
                <div className="contact-image-container">
                    <img src={photo} alt="Tye Rooth" />
                </div>
            </div>
        </section>
    );
};

const contactMeString = "Feel free to reach out if you think our relationship can be mutually beneficial."

export default ContactSection;