import React from "react";
import insta from "../images/icons/instagram.svg.png";
import face from "../images/icons/facebook.png";
import link from "../images/icons/linkedin.png";
import disc from "../images/icons/discord.png";
import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <>
      <h2>Contacts</h2>;
      <address>
        <span>
          <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B5%D0%B2" className={classes.a}>
            Kiev, Ukrane, UA
          </a>
        </span>
        <span>
          <a href="tel:+380953272557" className={classes.a}>
            +380953272557
          </a>
        </span>
        <span>
          <a href="mailto:Vanya.Goudz@gmail.com" className={classes.a}>
           Vanya.Goudz@gmail.com
          </a>
        </span>
      </address>
      <ul>
        <li>
          <a href="https://www.instagram.com/?hl=ru">Instagram</a>
          <img
            src={insta}
            alt="instagram"
            width="30"
            className={classes.icon}
          />
        </li>
        <li>
          <a href="https://m.facebook.com/login/?locale2=ru_RU">Facebook</a>
          <img src={face} alt="facebook" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://www.linkedin.com/">LinkeDin</a>
          <img src={link} alt="linkedin" width="30" className={classes.icon} />
        </li>
        <li>
          <a href="https://discord.com/">Discord</a>
          <img src={disc} alt="discord" width="30" className={classes.icon} />
        </li>
      </ul>
    </>
  );
}

export default Contacts;