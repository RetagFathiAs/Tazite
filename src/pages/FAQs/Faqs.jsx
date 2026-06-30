import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "./Faqs.css";

const faqsData = [
  {
    q: "How do I book a tour?",
    a: "Choose a package from our tours list, click Book Now, fill in traveler details and complete payment. You will receive a confirmation email with itinerary and contact details."
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations made 14+ days before departure receive a full refund minus transaction fees. For cancellations within 14 days, partial refunds may apply. Contact support for case-by-case exceptions."
  },
  {
    q: "Are meals and transport included?",
    a: "Each package lists inclusions. Many of our packages include transport and selected meals; some are accommodation-only. Check the package details or contact us for custom inclusions."
  },
  {
    q: "Do you offer custom itineraries?",
    a: "Yes. We design custom itineraries based on your interests, budget, and travel dates. Use the Contact or Custom Trip form to start planning."
  },
  {
    q: "Is travel insurance required?",
    a: "Travel insurance is strongly recommended. Some activities may require specific insurance; we can advise on suitable policies when you book."
  }
];

const Faqs = () => {
  return (
    <>
      <Breadcrumbs title="FAQs" pagename="FAQs" childnamed="d-none" />
      <section className="faqs-section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
              <h2 className="faqs-title">Memories From Our Trips</h2>
              <p className="faqs-sub">
                Frequently asked questions about booking, policies, and trip details.
              </p>

              <Accordion defaultActiveKey="0" className="faqs-accordion">
                {faqsData.map((item, idx) => (
                  <Card className="faq-card shadow-sm rounded-3 mb-3" key={idx}>
                    <Accordion.Item eventKey={String(idx)}>
                      <Accordion.Header className="faq-question">
                        {item.q}
                      </Accordion.Header>
                      <Accordion.Body className="faq-answer">
                        {item.a}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Card>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
