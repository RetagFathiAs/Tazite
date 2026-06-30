import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const Gallery = () => {
  const images = [
    { src: GalleryImg1, desc: "Person wearing shoes", sub: "Gift Habeshaw" },
    { src: GalleryImg3, desc: "Blonde woman wearing sunglasses", sub: "Dmitriy Frantsev" },
    { src: GalleryImg6, sub: "Harry Cunningham" },
    { src: GalleryImg4, desc: "Jaipur , Rajasthan India", sub: "Liam Baldock" },
    { src: GalleryImg7, sub: "Verne Ho" },
    { src: GalleryImg6, desc: "Rann of kutch , India", sub: "Hari Nandakumar" },
  ];

  return (
    <>
      <Breadcrumbs title="Gallery" pagename="Gallery" childnamed="d-none" />
      <section className="gallery-only-photos">
        <Container>
          <Row>
            <Col>
              <h2 className="h2 gallery-title">Memories From Our Trips</h2>
              <p className="body-text gallery-sub">
                A curated selection of photos from our tours and trips.
              </p>

              <div className="gallery-grid-4">
                {images.map((img, idx) => (
                  <figure key={idx} className="gallery-figure">
                    <img
                      src={img.src}
                      alt={img.desc || img.sub || `gallery-${idx}`}
                      className="gallery-img"
                    />
                    {(img.sub || img.desc) && (
                      <figcaption className="figure-caption-small">
                        {img.sub || img.desc}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
