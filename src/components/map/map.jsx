import React, { useState } from "react";
import libyaMap from "../../assets/images/map/libya-map.jpeg";

import image2 from "../../assets/images/new/IMG_0373.jpeg";
import image3 from "../../assets/images/new/IMG_0401.jpeg";
import image4 from "../../assets/images/new/IMG_0421.jpeg";
import image5 from "../../assets/images/new/IMG_0469.jpeg";
import image7 from "../../assets/images/new/IMG_0402.jpeg";
import image8 from "../../assets/images/new/IMG_0481.jpeg";
import { Card, Stack } from "react-bootstrap";
import "./map.css";

/**
 * LibyaMapWithRoutes.jsx
 * - Renders the uploaded libya-map.svg and draws interactive route paths on an SVG overlay.
 * - Default routes: Coastal A1 (Tripoli→Misrata→Sirte→Benghazi),
 *   Coastal connector, Fezzan (Tripoli→Sabha→Ghat).
 *
 * Adjust coordinates in the `roads` array to fine-tune alignment.
 */

// ============================================
// SIMPLE ROUTE HELPER FUNCTIONS
// ============================================

/**
 * Create a simple route from waypoints (just list the points!)
 * @param {Array} points - Array of {x, y} points
 * @returns {string} SVG path
 * 
 * Example: createRoute([{x:100,y:100}, {x:200,y:200}])
 */
function createRoute(points) {
  if (!points || points.length < 2) return "";
  return "M" + points.map(p => `${p.x} ${p.y}`).join(" L");
}

// ============================================
// DEFINE YOUR ROUTES HERE - Easy waypoints!
// ============================================



const routePoints = {
  Kufra_Awinat_JAGHBOUB : [
    { x: 805, y: 320 },
        { x: 750, y: 335 },

        { x: 750, y: 330 },
        { x:750, y: 395 },
        { x: 750, y: 410},
    
        { x: 750, y: 420 },
        { x: 750, y: 450 },
                { x: 750, y: 480 },
{ x: 740, y: 549 },
{ x: 740, y:583 },
{ x: 750, y: 650 },
{ x: 850, y: 780 },


  ],
  ZELLA_BLACKMOUNTAINS_AlNamous: [
    { x: 425, y: 380 },  // Tripoli
    // Sirte
    { x: 475, y: 425 },
        { x: 475, y: 435},
        { x: 490, y: 430},

    { x: 466, y: 549 },
    { x: 470, y: 580 },
  ],
   Fugha_WawAlnamous: [
    { x: 360, y: 420},  // Tripoli
    // Sirte
    { x: 375, y: 435 },
        { x: 376, y: 465},
       { x: 380, y: 470},
       { x: 409, y: 460},
       { x: 415, y: 545},],


  Ghdames_Awinat: [
    { x: 123, y: 490 },
        { x: 112, y: 528 },
    { x: 28, y: 598 },  // Tripoli
    { x: 100, y: 495},
        { x: 75, y: 425},
        { x: 60, y: 410},
        { x: 35, y: 350},
        { x: 20, y: 330},
                { x: 15, y: 300}, 
                { x: 0, y: 250},  // Benghazi
  // Benghazi
  ],
  Akakus_Massak: [
    { x:270, y: 465},
        { x: 260, y: 460 },

    { x: 150, y: 535 },
    { x: 25, y: 618 },
  ],
  Sebha_Waw_BAEZIMA_JALU: [
    { x: 622, y: 322 },  // Benghazi (start)
    { x: 670, y: 350 },  // Go right/down
    {x:710,y:450},
     { x: 700, y: 540 }, 
    { x: 680, y: 600 },
     { x: 585, y: 530 }, 
      { x:485, y: 600 }, 
      { x:420, y: 588 }, 
    { x:405, y: 555 }, 
            { x:385, y: 520 }, 
            { x:345, y: 510 },
                         { x:265, y: 530 },
                                                  { x:268, y: 477 },

 // End point
 
  ],
};

// Build roads array from waypoints
const roads = [
  {
    id: "ZELLA_BLACKMOUNTAINS_AlNamous",
    title: "ZELLA_BLACKMOUNTAINS_AlNamous",
    subtitle: "ZELLA_BLACKMOUNTAINS_AlNamous",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.ZELLA_BLACKMOUNTAINS_AlNamous),
    color: "#e331bf08",
    cardData: {
      image:image2,
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
      
      category: "Tour"
    }
  },
   {
    id: "Fugha_WawAlnamous",
    title: "Libyan Coastal Highway (A1)",
    subtitle: "Tripoli → Misrata → Sirte → Benghazi",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.Fugha_WawAlnamous),
    color: "#28a4510a",
    cardData: {
      image: image3,
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
     
      category: "Tour"
    }
  },
  {
    id: "Kufra_Awinat_JAGHBOUB",
    title: "Libyan Coastal Highway (A1)",
    subtitle: "Tripoli → Misrata → Sirte → Benghazi",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.Kufra_Awinat_JAGHBOUB),
    color: "#d81b1b02",
    cardData: {
      image: image4,
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
     
      category: "Tour"
    }
  },
  {
    id: "Ghdames_Awinat",
    title: "Ghdames - Awinat",
    subtitle: "Ghdames - Awinat",
    description: "A scenic route connecting the western and eastern coastal regions of Libya.",
    d: createRoute(routePoints.Ghdames_Awinat),
    color: "#df24a708",
    cardData: {
      image: image5,
      location: "Libya",
      routeName: "Ghdames - AwinatConnector",
   
      category: "Tour"
    }
  },
  {
    id: "Akakus_Massak",
    title: "Akakus_Massak Route",
    subtitle: "Akakus_Massak",
    description: "Journey through the ancient Fezzan region into the Sahara desert.",
    d: createRoute(routePoints.Akakus_Massak),
    color: "#1c7ad814",
    cardData: {
      image: image7,
      location: "Libya",
      routeName: "Akakus_Massak Route",
   
      category: "Tour"
    }
  },
  {
    id: "Sebha_Waw_BAEZIMA_JALU",
    title: "Sebha → Waw → BAEZIMA → JALU",
    subtitle: "Sebha → Waw → BAEZIMA → JALU",
    description: "Cross the stunning Sahara desert through ancient oases.",
    d: createRoute(routePoints.Sebha_Waw_BAEZIMA_JALU),
    color: "#065d080f",
    cardData: {
      image: image8,
      location: "Libya",
      routeName: "Sebha Desert Route",
     
      category: "Tour"
    }
  },
];


export default function LibyaMapWithRoutes() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleEnter = (road, e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
    setHovered(road);

    // If a route is already selected (user previously clicked),
    // hovering another route should switch the selection immediately.
    if (selected) {
      setSelected(road);
    }
  };

  const handleMove = (e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
  };

  const handleLeave = () => {
    // Only clear the hover tooltip; do not clear the selected card.
    setHovered(null);
  };

  const handleRouteClick = (road, e) => {
    // Clicking a route selects it (locks the card).
    setSelected(road);

    // Also update tooltip position and hovered so user sees immediate feedback.
    if (e && e.currentTarget) {
      const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
      setPos({
        x: e.clientX - svgRect.left + 10,
        y: e.clientY - svgRect.top + 10,
      });
    }
    setHovered(road);
  };

  // The route to display in the right-hand card: prefer selected, fallback to hovered
  const active = selected || hovered;

  return (
    <section aria-label="Map section" className="map-section">
      <h2 className="map-heading">Libya map with travel routes</h2>

      <div className="map-container">
        {/* Left side - Map */}
        <div className="map-left">
          <img src={libyaMap} alt="Libya Map" className="map-base" />

          {/* Overlay SVG: same coordinate system as the base file */}
          <svg viewBox="0 0 849 861" className="map-overlay">
            <g id="routes" className="map-routes">
              {roads.map((r) => {
                const isActive = active?.id === r.id;
                return (
                  <g key={r.id}>
                    <path
                      d={r.d}
                      stroke={r.color}
                      strokeWidth={isActive ? 12 : 8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      className="map-route"
                      style={{
                        opacity: active ? (isActive ? 1 : 0.45) : 0.95,
                      }}
                      onMouseEnter={(e) => handleEnter(r, e)}
                      onMouseMove={handleMove}
                      onMouseLeave={handleLeave}
                      onClick={(e) => handleRouteClick(r, e)}
                      role="button"
                      aria-label={`Road ${r.title}`}
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Tooltip (only when hovering) */}
          {hovered && (
            <div
              role="tooltip"
              className="map-tooltip"
              style={{
                left: pos.x,
                top: pos.y,
              }}
            >
              {hovered.title}
            </div>
          )}
        </div>

        {/* Right side - Card */}
        <div className="map-right">
          {active && active.cardData ? (
            <Card className="map-route-card shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src={active.cardData.image}
                className="img-fluid"
                alt={active.cardData.routeName}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text"> {active.cardData.location}</span>
                </Card.Text>
                <Card.Title className="route-card-title">
                  {active.cardData.routeName}
                </Card.Title>
                <p className="route-card-subtitle">{active.subtitle}</p>
                <p className="route-card-description">{active.description}</p>
                
                <span
                  className={
                    active.cardData.category.replace(/ .*/, "") + " badge"
                  }
                >
                  {active.cardData.category}
                </span>
              </Card.Body>
              <Card.Footer className="py-3">
                <Stack direction="horizontal" className="justify-content-between mt-2">
                  
                 
                </Stack>
              </Card.Footer>
            </Card>
          ) : (
            <div className="map-card-placeholder">
              <p>Hover or click on a route to see details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
