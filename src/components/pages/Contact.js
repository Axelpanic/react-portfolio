import React, { useState } from "react";
import Style from "../../assets/style/contact.css";
import Github from "../../assets/images/Icons/github-1.svg";
import Linkedin from "../../assets/images/Icons/linkedin-1.svg";
import Email from "../../assets/images/Icons/mail-1.svg";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="content">
      <div className="carder">
        <p>If you want to connect, you can fill this form or use the links down below! Thank you!</p>
        <form>
          <input
            value={name}
            className="form-input mb-3 w-100"
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            className="form-input mb-3 w-100"
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            className="form-input mb-3 w-100"
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button className="btn btn-primary btn-block py-3" type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="carder">
        <p> Or click a link below!</p>
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
}
