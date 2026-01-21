import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Contact = () => {
  return (
    <section className="get-in-touch" id="contact">
      <h2 className="contact-title  text-black">Get in touch</h2>

      <p className="contact-text  text-black">
        Prefer email? Send a mail to{" "}
        <a
          href="mailto:krishnasoni.8596@gmail.com"
          className="email-link"
        >
          krishnasoni.8596@gmail.com
        </a>{" "}
        or connect on LinkedIn / GitHub.
      </p>

    
      <div className="contact-icon">
        <a
          href="https://www.linkedin.com/in/krishna-soni-5b1a212b9"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/krishnasonii"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:krishnasoni.8596@gmail.com"
          className="items"
          aria-label="Email"
        >
          <CgMail />
        </a>

        <a
          href="https://wa.me/918676096016"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
