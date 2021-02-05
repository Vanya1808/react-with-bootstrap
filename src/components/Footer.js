import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <Container
        className={classes.footer}
        fluid
        style={{ backgroundColor: "brown", color: "cyan" }}
      >
        <p>&copy; Vanya Goudz 2021 </p>
      </Container>
    </>
  );
}

export default Footer;