import React, { useState } from "react";
import libyaMap from "../../assets/images/map/libya-map.jpeg";
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

/**
 * Route definitions using simple waypoints
 * Just list the cities/points in order!
 * 
 * Map coordinates (849 x 861):
 * - Tripoli: x:100-150, y:120-150
 * - Misrata: x:280-320, y:150-180
 * - Sirte: x:400-450, y:180-200
 * - Benghazi: x:600-650, y:180-210
 * - Sabha: x:350-400, y:450-500
 * - Ghat: x:200-250, y:550-600
 */

const routePoints = {
  left_red : [
    { x: 805, y: 230 },
        { x: 805, y: 246 },

        { x: 765, y: 263 },
        { x: 767, y: 345 },
        { x: 780, y: 360 },
    
        { x: 750, y: 380 },
        { x: 750, y: 400 },
                { x: 750, y: 430 },
{ x: 770, y: 499 },
{ x: 747, y:533 },
{ x: 795, y: 600 },
{ x: 850, y: 685 },


  ],
  coastal_a1: [
    { x: 430, y: 310 },  // Tripoli
    // Sirte
    { x: 480, y: 350 },
        { x: 480, y: 370},
        { x: 503, y: 355},

    { x: 480, y: 472 },
    { x: 480, y: 515 },
  ],
   coastal_green: [
    { x: 370, y: 355},  // Tripoli
    // Sirte
    { x: 385, y: 370 },
        { x: 386, y: 400},
       { x: 390, y: 405},
       { x: 419, y: 395},
       { x: 425, y: 470},],
  coastal_connector: [
    { x: 123, y: 450 },
        { x: 112, y: 473 },
    { x: 33, y: 542 },  // Tripoli
    { x: 104, y: 433},
        { x: 92, y: 375},
        { x: 70, y: 360},
        { x: 50, y: 300},
        { x: 33, y: 280},
                { x: 20, y: 250}, 
                { x: 0, y: 200},  // Benghazi
  // Benghazi
  ],
  fezzan_route: [
    { x:270, y: 400},
        { x: 260, y: 395 },

    { x: 150, y: 470 },
    { x: 25, y: 553 },
  ],
  southern_route: [
    { x: 630, y: 245 },  // Benghazi (start)
    { x: 680, y: 270 },  // Go right/down
    {x:720,y:400},
     { x: 710, y: 490 }, 
    { x: 705, y: 520 },
     { x: 605, y: 450 }, 
      { x:500, y: 535 }, 
      { x:425, y: 500 }, 
    { x:415, y: 460 }, 
            { x:380, y: 440 }, 
            { x:345, y: 443 },
                         { x:276, y: 465 },
                                                  { x:280, y: 410 },

 // End point
 
  ],
};

// Build roads array from waypoints
const roads = [
  {
    id: "coastal_a1",
    title: "Libyan Coastal Highway (A1)",
    subtitle: "Tripoli → Misrata → Sirte → Benghazi",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.coastal_a1),
    color: "#e331bf11",
    cardData: {
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
      rating: 4.8,
      reviews: 124,
      price: 450,
      days: "7 Days",
      category: "Tour"
    }
  },
   {
    id: "coastal_green",
    title: "Libyan Coastal Highway (A1)",
    subtitle: "Tripoli → Misrata → Sirte → Benghazi",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.coastal_green),
    color: "#28a4511c",
    cardData: {
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
      rating: 4.8,
      reviews: 124,
      price: 450,
      days: "7 Days",
      category: "Tour"
    }
  },
  {
    id: "left_red",
    title: "Libyan Coastal Highway (A1)",
    subtitle: "Tripoli → Misrata → Sirte → Benghazi",
    description: "Explore the main coastal highway connecting major Libyan cities along the Mediterranean coast.",
    d: createRoute(routePoints.left_red),
    color: "#d81b1b12",
    cardData: {
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Libyan Coastal Highway (A1)",
      rating: 4.8,
      reviews: 124,
      price: 450,
      days: "7 Days",
      category: "Tour"
    }
  },
  {
    id: "coastal_connector",
    title: "Coastal Connector",
    subtitle: "Tripoli → Al-Jufra → Benghazi",
    description: "A scenic route connecting the western and eastern coastal regions of Libya.",
    d: createRoute(routePoints.coastal_connector),
    color: "#df24a700",
    cardData: {
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Coastal Connector",
      rating: 4.5,
      reviews: 89,
      price: 380,
      days: "5 Days",
      category: "Adventure"
    }
  },
  {
    id: "fezzan_route",
    title: "Fezzan Trans Saharan Route",
    subtitle: "Tripoli → Sabha → Ghat",
    description: "Journey through the ancient Fezzan region into the Sahara desert.",
    d: createRoute(routePoints.fezzan_route),
    color: "#1c7ad825",
    cardData: {
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Fezzan Trans Saharan Route",
      rating: 4.9,
      reviews: 67,
      price: 650,
      days: "10 Days",
      category: "Escorted"
    }
  },
  {
    id: "southern_route",
    title: "Southern Desert Route",
    subtitle: "Benghazi → Al-Wahat → Kufra",
    description: "Cross the stunning Sahara desert through ancient oases.",
    d: createRoute(routePoints.southern_route),
    color: "#065d0815",
    cardData: {
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=250&fit=crop",
      location: "Libya",
      routeName: "Southern Desert Route",
      rating: 4.6,
      reviews: 45,
      price: 520,
      days: "8 Days",
      category: "Adventure"
    }
  },
];

export default function LibyaMapWithRoutes() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleEnter = (road, e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
    setHovered(road);
  };

  const handleMove = (e) => {
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect();
    setPos({
      x: e.clientX - svgRect.left + 10,
      y: e.clientY - svgRect.top + 10,
    });
  };

  const handleLeave = () => {
    setHovered(null);
  };

  const handleRouteClick = (road) => {
    setHovered(road);
  };

  return (
    <section aria-label="Map section" className="map-section">
      <h2 className="map-heading">
        Libya map with travel routes</h2>

      <div className="map-container">
        {/* Left side - Map */}
        <div className="map-left">
<img src={libyaMap} alt="Libya Map" className="map-base" />
          

          {/* Overlay SVG: same coordinate system as the base file */}
          <svg
            viewBox="0 0 849 861"
            className="map-overlay"
          >
            <g id="routes" className="map-routes">
              {roads.map((r) => {
                const isHovered = hovered?.id === r.id;
                return (
                  <g key={r.id}>
                    <path
                      d={r.d}
                      stroke={r.color}
                      strokeWidth={isHovered ? 12 : 8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      className="map-route"
                      style={{
                        opacity: hovered ? (isHovered ? 1 : 0.45) : 0.95,
                      }}
                      onMouseEnter={(e) => handleEnter(r, e)}
                      onMouseMove={handleMove}
                      onMouseLeave={handleLeave}
                      onClick={() => handleRouteClick(r)}
                      role="button"
                      aria-label={`Road ${r.title}`}
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Tooltip */}
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
          {hovered && hovered.cardData ? (
            <Card className="map-route-card shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src={hovered.cardData.image}
                className="img-fluid"
                alt={hovered.cardData.routeName}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text"> {hovered.cardData.location}</span>
                </Card.Text>
                <Card.Title className="route-card-title">
                  {hovered.cardData.routeName}
                </Card.Title>
                <p className="route-card-subtitle">{hovered.subtitle}</p>
                <p className="route-card-description">{hovered.description}</p>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{hovered.cardData.rating} </span>
                  <span>( {hovered.cardData.reviews} reviews )</span>
                </p>
                <span className={hovered.cardData.category.replace(/ .*/, "") + " badge"}>
                  {hovered.cardData.category}
                </span>
              </Card.Body>
              <Card.Footer className="py-3">
                <Stack direction="horizontal" className="justify-content-between mt-2">
                  <p>
                    From <b>${hovered.cardData.price}</b>
                  </p>
                  <p>
                    <i className="bi bi-clock"></i> {hovered.cardData.days}
                  </p>
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

