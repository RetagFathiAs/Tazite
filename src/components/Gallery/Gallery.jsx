import React, { useState, useMemo, Suspense } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

import img1 from "../../assets/images/gallery/_DSC7163-強化-NR-Edit.jpg";
import img2 from "../../assets/images/gallery/_DSC7227-強化-NR-Edit.jpg";
import img3 from "../../assets/images/gallery/_DSC7322-強化-NR-Edit.jpg";
import img4 from "../../assets/images/gallery/1c1dd884-b100-49a9-9abf-cdbbd9c5ee97.JPG";
import img5 from "../../assets/images/gallery/1f90745e-0932-4419-9dcc-b95ddc974846.JPG";
import img6 from "../../assets/images/gallery/2.JPG";
import img7 from "../../assets/images/gallery/8.JPG";
import img8 from "../../assets/images/gallery/8b8ba085-8e05-4a68-a0c7-d02137d842e1.jpg";
import img9 from "../../assets/images/gallery/15.JPG";
import img10 from "../../assets/images/gallery/18.JPG";
import img11 from "../../assets/images/gallery/20.JPG";
import img12 from "../../assets/images/gallery/21.JPG";
import img17 from "../../assets/images/gallery/30.JPG";
import img18 from "../../assets/images/gallery/31.JPG";
import img19 from "../../assets/images/gallery/32.JPG";
import img20 from "../../assets/images/gallery/33b526c2-6327-4f05-837d-80568084a14d.JPG";
import img21 from "../../assets/images/gallery/34.JPG";
import img22 from "../../assets/images/gallery/36.jpg";
import img23 from "../../assets/images/gallery/38.JPG";
import img24 from "../../assets/images/gallery/39.JPG";
import img25 from "../../assets/images/gallery/40.JPG";
import img26 from "../../assets/images/gallery/41.JPG";
import img27 from "../../assets/images/gallery/43.JPG";
import img28 from "../../assets/images/gallery/44.JPG";
import img29 from "../../assets/images/gallery/46.JPG";
import img30 from "../../assets/images/gallery/47.JPG";
import img31 from "../../assets/images/gallery/66a6268f-ead1-4b52-b20d-bf52a257768d.JPG";
import img32 from "../../assets/images/gallery/67d9ca92-f6cb-4ff4-86bb-374d2d498d1e.JPG";
import img33 from "../../assets/images/gallery/82b564d2-9fd8-4e12-9488-f82466b19e09.JPG";
import img34 from "../../assets/images/gallery/242d4784-35ab-486e-8475-d63bcc57a539.JPG";
import img35 from "../../assets/images/gallery/258cf9dd-cd15-4d99-923f-01c840153e80.JPG";
import img36 from "../../assets/images/gallery/558bc046-d983-4618-8cee-0732b726fe56.JPG";
import img37 from "../../assets/images/gallery/7574c46b-c98d-4445-adb2-095f904f6916.JPG";
import img38 from "../../assets/images/gallery/Akakus-5.jpg";
import img39 from "../../assets/images/gallery/d20d2ea8-d4ff-419d-83bc-7a1395597464.JPG";
import img40 from "../../assets/images/gallery/DSCN0004.JPG";
import img41 from "../../assets/images/gallery/DSCN0033.JPG";
import img42 from "../../assets/images/gallery/DSCN0058.JPG";
import img43 from "../../assets/images/gallery/DSCN0064.JPG";
import img44 from "../../assets/images/gallery/DSCN0112.JPG";
import img45 from "../../assets/images/gallery/DSCN0113.JPG";
import img46 from "../../assets/images/gallery/DSCN0155.JPG";
import img47 from "../../assets/images/gallery/f84a87bc-33e8-42ec-b01a-b1d0edc8c57b.JPG";
import img48 from "../../assets/images/gallery/IMG_0258.jpeg";
import img49 from "../../assets/images/gallery/IMG_0268.jpeg";
import img50 from "../../assets/images/gallery/IMG_0314.jpeg";
import img51 from "../../assets/images/gallery/IMG_0330.jpeg";
import img52 from "../../assets/images/gallery/IMG_0350.jpeg";
import img53 from "../../assets/images/gallery/IMG_0365.jpeg";
import img54 from "../../assets/images/gallery/IMG_0369 2.jpeg";
import img55 from "../../assets/images/gallery/IMG_0369.jpeg";
import img56 from "../../assets/images/gallery/IMG_0372.jpeg";
import img57 from "../../assets/images/gallery/IMG_0373.jpeg";
import img58 from "../../assets/images/gallery/IMG_0401.jpeg";
import img59 from "../../assets/images/gallery/IMG_0402.jpeg";
import img60 from "../../assets/images/gallery/IMG_0419.JPG";
import img61 from "../../assets/images/gallery/IMG_0421.jpeg";
import img62 from "../../assets/images/gallery/IMG_0421.JPG";
import img63 from "../../assets/images/gallery/IMG_0432.jpeg";
import img64 from "../../assets/images/gallery/IMG_0434.jpeg";
import img65 from "../../assets/images/gallery/IMG_0440.jpeg";
import img66 from "../../assets/images/gallery/IMG_0447.jpeg";
import img67 from "../../assets/images/gallery/IMG_0468.jpeg";
import img68 from "../../assets/images/gallery/IMG_0469.jpeg";
import img69 from "../../assets/images/gallery/IMG_0472.jpeg";
import img70 from "../../assets/images/gallery/IMG_0475.jpeg";
import img71 from "../../assets/images/gallery/IMG_0481.jpeg";
import img72 from "../../assets/images/gallery/IMG_0483.jpeg";
import img73 from "../../assets/images/gallery/IMG_0485.jpeg";
import img74 from "../../assets/images/gallery/IMG_0488.jpeg";
import img75 from "../../assets/images/gallery/IMG_0494.jpeg";
import img76 from "../../assets/images/gallery/IMG_0498.jpeg";
import img77 from "../../assets/images/gallery/IMG_0506.jpeg";
import img78 from "../../assets/images/gallery/IMG_0513.jpeg";
import img79 from "../../assets/images/gallery/IMG_0515.jpeg";
import img80 from "../../assets/images/gallery/IMG_0530.jpeg";
import img81 from "../../assets/images/gallery/IMG_0536.jpeg";
import img82 from "../../assets/images/gallery/IMG_0539.jpeg";
import img83 from "../../assets/images/gallery/IMG_0542.jpeg";
import img84 from "../../assets/images/gallery/IMG_0543.jpeg";
import img85 from "../../assets/images/gallery/IMG_0595.JPG";
import img86 from "../../assets/images/gallery/IMG_0598.JPG";
import img87 from "../../assets/images/gallery/IMG_0599.JPG";
import img88 from "../../assets/images/gallery/IMG_0600.JPG";
import img89 from "../../assets/images/gallery/IMG_0603.jpeg";
import img90 from "../../assets/images/gallery/IMG_0608.jpeg";
import img91 from "../../assets/images/gallery/IMG_2255.JPG";
import img92 from "../../assets/images/gallery/IMG_2305.JPG";
import img93 from "../../assets/images/gallery/IMG_2350.JPG";
import img94 from "../../assets/images/gallery/IMG_2516.JPG";
import img95 from "../../assets/images/gallery/IMG_3057.JPG";
import img96 from "../../assets/images/gallery/IMG_3616.JPG";
import img97 from "../../assets/images/gallery/m 4.JPG";
import img98 from "../../assets/images/gallery/m 5.JPG";
import img99 from "../../assets/images/gallery/m 6.JPG";
import img100 from "../../assets/images/gallery/m 7.JPG";
import img101 from "../../assets/images/gallery/WhatsApp Image 2024-03-20 at 13.38.02.jpeg";
import img102 from "../../assets/images/gallery/WhatsApp Image 2026-04-01 at 23.32.10.jpeg";
import img103 from "../../assets/images/gallery/WhatsApp Image 2026-04-01 at 23.32.13.jpeg";

const Lightbox = React.lazy(() => import("./Lightbox"));

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const images = useMemo(
    () => [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img4 },
      { src: img5 },
      { src: img6 },
      { src: img7 },
      { src: img8 },
      { src: img9 },
      { src: img10 },
      { src: img11 },
      { src: img12 },
      { src: img17 },
      { src: img18 },
      { src: img19 },
      { src: img20 },
      { src: img21 },
      { src: img22 },
      { src: img23 },
      { src: img24 },
      { src: img25 },
      { src: img26 },
      { src: img27 },
      { src: img28 },
      { src: img29 },
      { src: img30 },
      { src: img31 },
      { src: img32 },
      { src: img33 },
      { src: img34 },
      { src: img35 },
      { src: img36 },
      { src: img37 },
      { src: img38 },
      { src: img39 },
      { src: img40 },
      { src: img41 },
      { src: img42 },
      { src: img43 },
      { src: img44 },
      { src: img45 },
      { src: img46 },
      { src: img47 },
      { src: img48 },
      { src: img49 },
      { src: img50 },
      { src: img51 },
      { src: img52 },
      { src: img53 },
      { src: img54 },
      { src: img55 },
      { src: img56 },
      { src: img57 },
      { src: img58 },
      { src: img59 },
      { src: img60 },
      { src: img61 },
      { src: img62 },
      { src: img63 },
      { src: img64 },
      { src: img65 },
      { src: img66 },
      { src: img67 },
      { src: img68 },
      { src: img69 },
      { src: img70 },
      { src: img71 },
      { src: img72 },
      { src: img73 },
      { src: img74 },
      { src: img75 },
      { src: img76 },
      { src: img77 },
      { src: img78 },
      { src: img79 },
      { src: img80 },
      { src: img81 },
      { src: img82 },
      { src: img83 },
      { src: img84 },
      { src: img85 },
      { src: img86 },
      { src: img87 },
      { src: img88 },
      { src: img89 },
      { src: img90 },
      { src: img91 },
      { src: img92 },
      { src: img93 },
      { src: img94 },
      { src: img95 },
      { src: img96 },
      { src: img97 },
      { src: img98 },
      { src: img99 },
      { src: img100 },
      { src: img101 },
      { src: img102 },
      { src: img103 },
    ],
    []
  );

  const openLightbox = (i) => setOpenIndex(i);
  const closeLightbox = () => setOpenIndex(null);

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
                  <figure
                    key={idx}
                    className="gallery-figure"
                    onClick={() => openLightbox(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") openLightbox(idx);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.desc || img.sub || `gallery-${idx}`}
                      className="gallery-img"
                      loading="lazy"
                      decoding="async"
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

      <Suspense fallback={null}>
        {openIndex !== null && (
          <Lightbox images={images} startIndex={openIndex} onClose={closeLightbox} />
        )}
      </Suspense>
    </>
  );
};

export default Gallery;
