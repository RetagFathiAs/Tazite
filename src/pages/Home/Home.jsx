import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import { Container, Row, Col, Card } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Home/home.css";

import tour4 from "../../assets/images/tour/8b8ba085-8e05-4a68-a0c7-d02137d842e1.jpg";
import tour5 from "../../assets/images/tour/36.jpg";
import tour6 from "../../assets/images/tour/Akakus-5.jpg";
import tour7 from "../../assets/images/tour/_DSC7163-強化-NR-Edit.jpg";
import tour8 from "../../assets/images/tour/_DSC7227-強化-NR-Edit.jpg";
import tour9 from "../../assets/images/tour/_DSC7227-強化-NR-Edit.jpg"



import Map from "../../components/map/map";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const destinations = [
    {
      id: 0,
      name: "Libya",
      tours: "5 tours and activities",
      image: tour5,
      link: "tour-name",
      shortDes: "",
      link: "/tour",
      location: "dehradun",
    },
    {
      id: 1,
      name: "Libya",
      tours: "9 tours and activities",
      image: tour4,
      link: "tour-name",
      shortDes: "",
      link: "/tour",
      location: "Rishikesh",
    },
    {
      id: 2,
      name: "Libya",
      tours: "5 tours and activities",
      image: tour6,
      link: "tour-name",
      shortDes: "",
      link: "/tour",
      location: "Mussoorie",
    },
    {
      id: 3,
      name: "Libya",
      tours: "4 tours and activities",
      image: tour7,
      link: "tour-name",
      shortDes: "",
      link: "/tour",
      location: "Uttarkhashi",
    },
    {
      id: 4,
      name: "Libya",
      tours: "9 tours and activities ",
      image: tour8,
      link: "tour-name",
      shortDes: "",
      link: "/tour",
      location: "Manali",
    },
    {
      id: 5,
      name: "Libya",
      tours: "4 tours and activities",
      image: tour9,
      link: "tour-name",
      shortDes: "4 tours and activities",
      link: "/tour",
      location: "Haridwar",
    },
  ];

  return (
    <>
      <Banner />
      <Features />

      {/* tour seciton start */}

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinations.map((destination, inx) => {
                  return (
                    <div className="img-box" key={inx}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={destination.image}
                          className="img-fluid"
                          alt={destination.name}
                        />
                        <Card.Title>{destination.name}</Card.Title>

                        <span className="tours">{destination.tours}</span>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton ends */}

      
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h2 className="heading">
                READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </Col>
            
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="map">
        <Map />
      </section>
    </>
  );
};

export default Home;
