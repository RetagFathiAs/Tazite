import React from "react";
import BreadcrumbsImport from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import "./Evisa.css"; // ensure this file exists

// Resolve Breadcrumbs whether it's a default export or named export object
const Breadcrumbs =
  (BreadcrumbsImport && (BreadcrumbsImport.default || BreadcrumbsImport)) ||
  null;

/* Inline content (title and intro intentionally omitted) */
const evisaData = {
  page: "Libya E-Visa",
  steps: [
    {
      step: 1,
      title: "Prepare passport and booking",
      sections: [
        {
          heading: "Passport requirements",
          type: "list",
          items: [
            "Passport must not contain an Israeli stamp or visa.",
            "Passport must contain at least two blank pages.",
            "Passport must be valid for at least six months from your departure date."
          ]
        },
        {
          heading: "Documents and information to send to Taziet Travel",
          type: "list",
          items: [
            "Color JPG copies of your passport bio page(s) via email.",
            "Your profession(s).",
            "Book one of our Libya tours (private tour or group tour with fixed itinerary and date of arrival not changeable after applying) at least 30 days before your arrival.",
            "We do not provide invitation letters without a confirmed tour booking."
          ]
        },
        {
          heading: "After booking",
          type: "paragraph",
          text:
            "After you book a tour and confirm the price and itinerary, we will send you a copy of the LOI (Letter of Invitation) and all required sponsor information."
        },
        {
          heading: "Sponsor information provided",
          type: "list",
          items: [
            "Name of sponsor",
            "Email of sponsor",
            "Phone of sponsor",
            "Address of sponsor",
            "Sponsor passport copy",
            "Sponsor extra documents (if any)"
          ]
        }
      ]
    },
    {
      step: 2,
      title: "Create eVisa account and apply",
      sections: [
        {
          heading: "Create account",
          type: "list",
          items: [
            "Go to www.evisa.gov.ly and create an account.",
            "Check your email inbox (including spam) for the One Time Code to activate your account."
          ]
        },
        {
          heading: "Application details to fill",
          type: "list",
          items: [
            "Provide personal details: full name, date of birth, nationality, passport information.",
            "Provide travel information exactly as shown on the invitation letter: intended dates of entry and exit.",
            "Choose purpose: tourism and select single entry (not multiple entry).",
            "Upload sponsor documents: invitation letter and sponsor passport copy.",
            "Upload supporting documents: your passport and a personal photo meeting the requirements."
          ]
        },
        {
          heading: "Photo requirements",
          type: "list",
          items: [
            "Passport sized: 3.5 x 4.5 cm.",
            "Recent (within 6 months), representative of you, natural skin tone, plain white background, only you in the frame.",
            "Face forward with visible facial features and tops of shoulders; head must cover 70–80% of the photo (32–36 mm).",
            "No sunglasses; non-tinted eyeglasses allowed if frames do not obscure eyes.",
            "Neutral expression with mouth closed and eyes open; remove red-eye if present.",
            "Clear, in focus, color neutral, normal contrast and brightness; unmarked and undamaged."
          ]
        },
        {
          heading: "File format and size",
          type: "paragraph",
          text: "Upload files in JPG or JPEG format. Files must not exceed 2048 MB."
        },
        {
          heading: "Final steps on the eVisa portal",
          type: "ordered_list",
          items: [
            "Review application for accuracy and completeness.",
            "Make payment using a credit or debit card.",
            "Submit application and receive confirmation email.",
            "Wait for processing (typically 5–7 working days)."
          ]
        }
      ]
    },
    {
      step: 3,
      title: "After visa approval",
      sections: [
        {
          heading: "What to do after approval",
          type: "list",
          items: [
            "Send a copy of your approved visa to Tidwa Travel at least 7 working days before arrival.",
            "Tidwa Travel will submit the travel permit on your behalf after receiving the visa copy.",
            "You must make the full payment of your booked tour when requested."
          ]
        },
        {
          heading: "Important reminders",
          type: "list",
          items: [
            "Invitation letters are issued only after a confirmed tour booking with Tidwa Travel.",
            "Arrival dates on the booking cannot be changed after the eVisa application is submitted.",
            "Keep copies of all submitted documents and confirmation emails until travel is complete."
          ]
        }
      ]
    }
  ],
  contact_note: ""
};

const RenderSection = ({ section }) => {
  if (!section) return null;

  switch (section.type) {
    case "list":
      return (
        <ul className="line-list">
          {section.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ordered_list":
      return (
        <ol className="line-list">
          {section.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "paragraph":
      return <p className="paper-paragraph">{section.text}</p>;
    default:
      return null;
  }
};

const Evisa = () => {
  const data = evisaData;

  return (
    <>
      {Breadcrumbs ? (
        <Breadcrumbs title="Libyan Visa" pagename="Evisa" childnamed="d-none" />
      ) : (
        <nav className="local-breadcrumb" aria-label="breadcrumb">
          <Container>
            <Row>
              <Col>
                <ul className="breadcrumb-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li aria-current="page">Libya E-Visa</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </nav>
      )}

      <section className="evisa-paper-section">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              {/* Title and intro removed as requested */}

              <article className="paper" aria-labelledby="evisa-steps">
                <div id="evisa-steps">
                  {Array.isArray(data.steps) &&
                    data.steps.map((step) => (
                      <section key={String(step.step)} className="paper-step-block">
                        <div className="step-line">
                          <h2 className="paper-step">
                            Step {step.step} — {step.title}
                          </h2>
                        </div>

                        {Array.isArray(step.sections) &&
                          step.sections.map((section, idx) => (
                            <div className="paper-block" key={idx}>
                              {section.heading && (
                                <h3 className="paper-subtitle">{section.heading}</h3>
                              )}
                              <RenderSection section={section} />
                            </div>
                          ))}
                      </section>
                    ))}
                </div>

                <footer className="paper-footer">
                  <p>{data.contact_note}</p>
                </footer>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Evisa;
