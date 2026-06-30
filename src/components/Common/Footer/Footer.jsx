import React, { useState } from "react";
import "../Footer/footer.css"
import { Col, Container, Row ,ListGroup} from "react-bootstrap";

const Footer = () => {
  const [visible, setVisible]=useState(false);

  const toggleVisible=()=>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300){
      setVisible(true)
    }
   else if(scrolled  <= 300){
      setVisible(false)
    }
  }

  const scrollTop =()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  if(typeof window !== "undefined"){
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
    <footer className="pt-5">
      <Container>
        <Row className="flex">
           
         
        </Row>
        <Row className="py-2 bdr mt-3">
        <Col className="col copyright">
<p className="text-light text-center">
  ©2026 All rights reserved
</p>
        </Col>
        </Row>

      </Container>
    </footer>

    <div id="back-top"
    onClick={scrollTop}
     className={visible ? "active" : ""}>
    <i className="bi bi-arrow-up"></i>

    </div>
    </>
  );
};

export default Footer;
