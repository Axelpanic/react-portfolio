import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Style from "../../assets/style/contact.css";
import Github from "../../assets/images/github-1.svg";
import Linkedin from "../../assets/images/linkedin-1.svg";

export default function Contact() {
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_uu5fi19', 'template_hkptkyn', form.current, 'EhEilakwQ6VVollT6')
      .then((result) => {
        console.log(JSON.stringify(result.text));
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div >
      <div className="carder">
        {/*
          <form ref={form} className="form" onSubmit={SendEmail}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="email" />
            <textarea name="message" placeholder="message" />
            <input type="submit" value="Send" />
          </form>
  </div> */}
      </div>
      <div className="carder">
        <p className="title"> click a link below!</p>
        <div className="row">
          <div className="col">
            <a href="https://github.com/axelpanic" target="_blank" rel="noreferrer">
              <img src={Github} alt="Github Link" />
            </a></div>
          <div className="col">
            <a href="https://www.linkedin.com/in/alex-hickey-935b3318b/" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="Linkedin Link" />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};
