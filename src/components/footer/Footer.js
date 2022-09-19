import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const facebook = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const gitHub = <FontAwesomeIcon icon={faGithub} />;

  return (
    <footer>
      <div className="col-sm-12 col-lg-2 contact-info left">
        GET IN TOUCH
        <div>
          <p>{email} example@gmail.com</p>
          <p>{phone} +02 012-345-6789</p>
        </div>
      </div>

      <div className="text-center col-sm-3 col-lg-2 py-5 center">
        <a href="mailto:shadybassily@yahoo.com" className="contact-me">
          Contact me
        </a>
      </div>

      <div className="col-3 text-center right col-sm-12 col-lg-2">
        <div className="icons-container">
          <a href="#">{facebook} </a>
          <a href="#">{linkedIn}</a>
          <a href="#">{twitter}</a>
          <a href="#">{gitHub}</a>
        </div>
      </div>
    </footer>
  );
}
