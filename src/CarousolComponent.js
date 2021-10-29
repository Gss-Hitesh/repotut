import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";

const carouselContainer = () => {
  return (
    <Carousel width="100%" margin="0" padding="0" className="container">
      <Carousel.Item className="container" interval={1000}>
        <img
          className="Image__i"
          src="https://i.ibb.co/NtpNp5R/image.png"
          alt="First slide"
          class="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item className="container" interval={500}>
        <img
          className="Image__i"
          src="https://i.ibb.co/znBgQh3/image.png"
          alt="Second slide"
          class="d-block img-fluid"
        />
      </Carousel.Item>
      <Carousel.Item className="container">
        <img
          className="Image__i"
          src="https://i.ibb.co/VNNz1JM/image.png"
          alt="Third slide"
          class="d-block img-fluid"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default carouselContainer;
