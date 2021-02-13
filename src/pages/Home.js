import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/html1.png";
import img2 from "../images/js.png";
import img3 from "../images/react.png";
import Toggler from "../components/Toggler";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Toggler>
        {() => (
          <>
          <button type="button">{}</button>


          </>
        )}
      </Toggler>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Goal</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Work</Card.Title>
                <Card.Text>Sucсes</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>family</Card.Title>
                <Card.Text>sport</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img2}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Future</h2>
            <p>
              My future goal is to be a web developer.I want to do a frontend
              for site.I want to create javascript,html and some others frontend
              things.Nowadays i want to finish the react course and after that i
              want to learn php or jquery.Also i want to know a litle bit more
              about backand.I can learn python or java.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img1}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>General</h2>
            <p>
              I'm Ivan. I'm 14 years old and i come from Ukraine, from Kiev.I'm
              in 9 grade.And at the moment i have learned frontand about 1.5
              years or even almost 2 years. In beginning i learned html and some
              basics things about codding.After that i learned javascript , it
              was about 6 months. And now in the end of 2020 i started to learn
              the framework or library(somebody called it like that) React.js.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img3}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Additional</h2>
            <p>
              Also i like sport and video games.Sport it is very important theme
              for developers.Because developers are working a lot . And you
              always need to sit down on your chair for a lot of hours.And it is
              not good for your back and healthy.So you need to do some
              exercises to keep yourself in a shape.Also you need to sleep a lot
              , because it's very important for your brain.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
