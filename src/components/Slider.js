import React from "react";
import img1 from "../images/html1.png";
import img2 from "../images/js.png";
import img3 from "../images/react.png";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "800px" }}>
        <img src={img1} alt="img" className="d-block w-100" />
        <h2>Title</h2>
        <p>Description</p>
      </Carousel.Item>
      <Carousel.Item style={{ height: "800px" }}>
        <img src={img3} alt="img" className="d-block w-100" />
        <h2>Title</h2>
        <p>Description</p>
      </Carousel.Item>
      <Carousel.Item style={{ height: "800px" }}>
        <img src={img2} alt="img" className="d-block w-100" />
        <h2>Title</h2>
        <p>Description</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
