import React from "react";
import ContactIMG from "../../assets/images/header_bg_2.jpg";
import { SiMessenger } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

function Contact() {
  return (
    <section>
      <div className="section_header">
        <div
          className="section_header_content"
          style={{ backgroundImage: `url(${ContactIMG})` }}
        >
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
            vel, soluta odio velit obcaecati animi corporis esse veniam debitis
            voluptatibus cupiditate, ducimus nostrum tempora commodi minus
            laborum nihil nisi.
          </p>
        </div>
      </div>
      <div className="contact_container">
        <a
          className="contact_link"
          href="https://m.me/abdo.goda.7169"
          target="_blanck"
        >
          <SiMessenger />
        </a>
        <a
          className="contact_link"
          href="mailto:abdogoda0a@gmail.com"
          target="_blanck"
        >
          <MdEmail />
        </a>
        <a
          className="contact_link"
          href="http://wa.me/+2001142366716"
          target="_blank"
        >
          <BsWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contact;
