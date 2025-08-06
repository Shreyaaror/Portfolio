import React from "react";
import { MdContactMail } from "react-icons/md"; // 📩 Mail contact icon
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import PageHeaderContent from "../../components/pageheadercontent";
import "./style.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact">
   

<PageHeaderContent
  headerText="Contact Me"
  icon={<MdContactMail size={40} />}
/>


      <div className="contact__content">
        {/* Contact Info Section */}
        <div className="contact__info">
          <div className="contact__item">
            <MdPhone size={24} color="var(--yellow-theme-main-color)" />
            <span>+91 8791680033</span>
          </div>
          <div className="contact__item">
            <MdEmail size={24} color="var(--yellow-theme-main-color)" />
            <span>shreyarora367@gmail.com</span>
          </div>
          <div className="contact__item">
            <MdLocationOn size={24} color="var(--yellow-theme-main-color)" />
            <span>Uttar Pradesh, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
