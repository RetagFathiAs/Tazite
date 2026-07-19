import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { popularsData } from "../../components/utils/data";
import ProductCard from "../../components/Cards/ProductCard";
import "./tour.css"; // add this file for wrapper styles

function Tours() {
  const [showFiter, setShowFiter] = useState(false);

  const handleFilter = () => {
    setShowFiter(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "tour";
  }, []);

  return (
    <>
      <Breadcrumbs title="Tours" pagename="Tours " childnamed="d-none" />
      <section className="tour_list py-5">
        <Container>
          {/* Center wrapper: use .cards-wrapper to center cards horizontally (and vertically if desired) */}
          <Row className="cards-wrapper justify-content-center">
            {popularsData.map((val, inx) => (
              <Col
                key={inx}
                xl={3}
                lg={6}
                md={6}
                sm={8}
                xs={12}
                className="mb-5 d-flex justify-content-center"
              >
                {/* ProductCard will keep its own width; wrapper centers it */}
                <ProductCard val={val} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Tours;
