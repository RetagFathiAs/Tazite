// src/components/Gallery/Lightbox.jsx
import React, { useEffect, useCallback } from "react";
import "./Lightbox.css";

const Lightbox = ({ images = [], startIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(
    startIndex != null ? startIndex : 0
  );

  // sync when startIndex changes
  useEffect(() => {
    if (startIndex != null) setCurrentIndex(startIndex);
  }, [startIndex]);

  // prevent background scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, onClose]);

  if (!images || images.length === 0) return null;
  if (currentIndex == null) return null;

  // images in your Gallery are objects like { src: img1 }
  const item = images[currentIndex];
  const src = item && (item.src || item); // support both {src} and plain src entries

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      onClick={() => onClose && onClose()}
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className="lightbox-close"
          aria-label="Close"
          onClick={() => onClose && onClose()}
        >
          ×
        </button>

        <div className="lightbox-body">
          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Previous"
            onClick={prev}
          >
            ‹
          </button>

          <img
            src={src}
            alt={`gallery-large-${currentIndex}`}
            className="lightbox-img"
            loading="eager"
            decoding="async"
          />

          <button
            className="lightbox-nav lightbox-next"
            aria-label="Next"
            onClick={next}
          >
            ›
          </button>
        </div>

        <div className="lightbox-footer">
          <span className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
