import React, { useState, useEffect, useRef } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import "../Cards/card.css";
import "../Cards/card-slide.css";
import "../Cards/card-controls.css";

function toISODate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function ProductCard({ val, onNext }) {
  // step: 0 = pane A (original), 1 = pane B (customize), 2 = pane C (contact)
  const [step, setStep] = useState(0);

  const [selectedMembers, setSelectedMembers] = useState(1);
  const [selectedHotelStars, setSelectedHotelStars] = useState(3);

  // Days default/clamp 3..30
  const clampDays = (v) => Math.max(3, Math.min(30, Math.round(v || 3)));
  const [days, setDays] = useState(clampDays(val?.days ?? 3));

  // Date picker
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(toISODate(today));

  // Contact fields (pane C)
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const viewportRef = useRef(null);
  const paneARef = useRef(null);
  const paneBRef = useRef(null);
  const paneCRef = useRef(null);

  useEffect(() => {
    // reset when product changes
    setStep(0);
    setSelectedMembers(1);
    setSelectedHotelStars(3);
    setDays(clampDays(val?.days ?? 3));
    setSelectedDate(toISODate(today));
    setEmail("");
    setPhone("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  // sync viewport height to active pane for smooth height animation
  useEffect(() => {
    const setHeight = () => {
      const activeRef = step === 0 ? paneARef.current : step === 1 ? paneBRef.current : paneCRef.current;
      if (!viewportRef.current || !activeRef) return;
      viewportRef.current.style.height = `${activeRef.offsetHeight}px`;
    };
    setHeight();
    const t = setTimeout(setHeight, 60);
    return () => clearTimeout(t);
  }, [step, val, days, selectedMembers, selectedHotelStars, selectedDate, email, phone]);

  const memberOptions = [1, 2, 3, 4, 5, 6];
  const hotelStarOptions = [1, 2, 3, 4, 5];

  // Days spinner helpers (3..30)
  const changeDays = (delta) => setDays((d) => clampDays(d + delta));
  const onDaysInput = (e) => {
    const v = Number(e.target.value);
    if (!Number.isNaN(v)) setDays(clampDays(v));
  };
  const onDaysKey = (e) => {
    if (e.key === "ArrowUp") { e.preventDefault(); changeDays(1); }
    if (e.key === "ArrowDown") { e.preventDefault(); changeDays(-1); }
  };
  const onDaysWheel = (e) => {
    e.preventDefault();
    changeDays(e.deltaY < 0 ? 1 : -1);
  };

  // Date picker handlers
  const minDate = toISODate(today);
  const maxDateObj = new Date(today);
  maxDateObj.setFullYear(maxDateObj.getFullYear() + 1);
  const maxDate = toISODate(maxDateObj);
  const onDateChange = (e) => setSelectedDate(e.target.value);

  // Navigation
  const goNext = () => {
    if (step < 2) {
      setStep((s) => s + 1);
      return;
    }

    // final submit from pane C
    const payload = {
      id: val?.id,
      title: val?.title,
      members: selectedMembers,
      hotelStars: selectedHotelStars,
      days,
      startDate: selectedDate,
      email,
      phone,
    };

    if (onNext) onNext(payload);
    else console.log("Final payload:", payload);

    // optional: reset or go back to start
    setStep(0);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  // small validation helpers (basic)
  const isEmailValid = (em) => /\S+@\S+\.\S+/.test(em);
  const isPhoneValid = (ph) => ph.trim().length >= 6;

  return (
    <Card className="rounded-2 shadow-sm popular product-with-slide">
      <Card.Img variant="top" src={val?.image} className="img-fluid" alt={val?.title} />

      <div className="slide-viewport" ref={viewportRef} aria-live="polite">
        <div className={`slide-track step-${step}`}>
          {/* Pane A */}
          <div className="slide-pane" ref={paneARef} aria-hidden={step !== 0}>
            <Card.Body>
              <Card.Text>
                <i className="bi bi-geo-alt"></i>
                <span className="text"> {val?.location}</span>
              </Card.Text>

              <Card.Title>{val?.title}</Card.Title>

              <p className="reviwe">
                <span><i className="bi bi-star-fill me-1"></i></span>
                
                <span>{val?.details}</span>
              </p>

              <div>
                {Array.isArray(val?.category) &&
                  val.category.map((cat, index) => (
                    <span key={index} className={cat.replace(/ .*/, "") + " badge"} style={{ marginRight: 6 }}>
                      {cat}
                    </span>
                  ))}
              </div>
            </Card.Body>

            <Card.Footer className="py-4 d-flex justify-content-between align-items-center">
              <div></div>

              <div className="d-flex gap-2">
                <Button variant="primary" onClick={goNext}>Next</Button>
              </div>
            </Card.Footer>
          </div>

          {/* Pane B: customize */}
          <div className="slide-pane pane-b" ref={paneBRef} aria-hidden={step !== 1}>
            <Card.Body>
              <div className="center-title-wrapper">
                <Card.Title className="center-title">Customize your trip</Card.Title>
              </div>

              <div className="checkbox-group">
                <div className="checkbox-row">
                  <div className="checkbox-label">
                    <strong>Members</strong>
                    <span className="selected-value">{selectedMembers}</span>
                  </div>
                  <div className="checkbox-options">
                    {memberOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`chkbox ${selectedMembers === opt ? "checked" : ""}`}
                        onClick={() => setSelectedMembers(opt)}
                      >
                        <input type="checkbox" checked={selectedMembers === opt} readOnly />
                        <span className="chkbox-label">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="checkbox-row mt-3">
                  <div className="checkbox-label">
                    <strong>Hotel degree</strong>
                    <span className="selected-value">{selectedHotelStars}★</span>
                  </div>
                  <div className="checkbox-options">
                    {hotelStarOptions.map((opt) => (
                      <label
                        key={opt}
                        className={`chkbox ${selectedHotelStars === opt ? "checked" : ""}`}
                        onClick={() => setSelectedHotelStars(opt)}
                      >
                        <input type="checkbox" checked={selectedHotelStars === opt} readOnly />
                        <span className="chkbox-label">{opt}★</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="checkbox-row mt-3">
                  <div className="checkbox-label">
                    <strong>Days</strong>
                    <span className="selected-value">{days}d</span>
                  </div>

                  <div className="control-row">
                    <div className="days-spinner" onWheel={onDaysWheel} role="group" aria-label="Number of days">
                      <input
                        id={`days-${val?.id}`}
                        className="days-input"
                        type="number"
                        min={3}
                        max={30}
                        value={days}
                        onChange={onDaysInput}
                        onKeyDown={onDaysKey}
                        aria-live="polite"
                      />
                      <div className="days-arrows" aria-hidden="true">
                        <button type="button" className="arrow up" onClick={() => changeDays(1)} tabIndex={-1} />
                        <button type="button" className="arrow down" onClick={() => changeDays(-1)} tabIndex={-1} />
                      </div>
                    </div>

                    <div className="control-value">{days} day{days !== 1 ? "s" : ""}</div>
                  </div>
                </div>

                <div className="checkbox-row mt-3">
                  <div className="checkbox-label">
                    <strong>Select date</strong>
                    <span className="selected-value">{selectedDate}</span>
                  </div>

                  <div className="date-row">
                    <input
                      type="date"
                      className="small-date-input"
                      value={selectedDate}
                      min={minDate}
                      max={maxDate}
                      onChange={onDateChange}
                      aria-label="Select start date"
                    />
                    <div className="date-hint">Pick a start date</div>
                  </div>
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="py-4 d-flex justify-content-between">
              <Button variant="secondary" onClick={goBack}>Back</Button>
              <Button variant="primary" onClick={goNext}>Next</Button>
            </Card.Footer>
          </div>

          {/* Pane C: contact form */}
          <div className="slide-pane pane-c" ref={paneCRef} aria-hidden={step !== 2}>
            <Card.Body>
              <div className="center-title-wrapper">
                <Card.Title className="center-title">Get in Touch</Card.Title>
              </div>

              <div className="contact-form">
                <label className="form-label">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email"
                />
                <div className="field-hint">{email && !isEmailValid(email) ? "Enter a valid email" : ""}</div>

                <label className="form-label mt-3">
                  <strong>Phone</strong>
                </label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-label="Phone number"
                />
                <div className="field-hint">{phone && !isPhoneValid(phone) ? "Enter a valid phone" : ""}</div>
              </div>
            </Card.Body>

            <Card.Footer className="py-4 d-flex justify-content-between">
              <Button variant="secondary" onClick={goBack}>Back</Button>
              <Button
                variant="primary"
                onClick={goNext}
                disabled={!isEmailValid(email) || !isPhoneValid(phone)}
              >
                Submit
              </Button>
            </Card.Footer>
          </div>
        </div>
      </div>
    </Card>
  );
}
