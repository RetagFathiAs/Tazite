// populars
import Anchorage from "../../assets/images/popular/IMG_0258.jpeg";
import Singapore from "../../assets/images/popular/IMG_0268.jpeg";
import Kiwiana from "../../assets/images/popular/IMG_0314.jpeg";
import Quito from "../../assets/images/popular/IMG_0372.jpeg";
import Cuzco from "../../assets/images/popular/IMG_0401.jpeg";
import Ushuaia from "../../assets/images/popular/IMG_0402.jpeg";
import Santiago from "../../assets/images/popular/IMG_0421.jpeg";
import Explorer from "../../assets/images/popular/IMG_0468.jpeg";

// tour detail
import image1 from "../../assets/images/new/IMG_0372.jpeg";
import image2 from "../../assets/images/new/IMG_0373.jpeg";
import image3 from "../../assets/images/new/IMG_0401.jpeg";
import image4 from "../../assets/images/new/IMG_0421.jpeg";
import image5 from "../../assets/images/new/IMG_0469.jpeg";
import image6 from "../../assets/images/new/IMG_0468.jpeg";
import image7 from "../../assets/images/new/IMG_0402.jpeg";
import image8 from "../../assets/images/new/IMG_0481.jpeg";




// src/components/utils/data.js
// Keep your existing image imports at the top of this file (Singapore, Kiwiana, Quito, Anchorage, Cuzco, Ushuaia, Santiago, Explorer)

export const popularsData = [
  {
    id: 0,
    title: "Akakus - Massak",
    location:
      "Sebha - Awinat - Adad - Awiss - Tinlalin - Teshwint - Afzegar - Anshal - Tanshalt - Wan Casa - Massak - Eghaljewin Nebetigh - Matkndoush - Barjuj - Lakes - Sebha",
    image: Singapore,
    category: ["Desert Trips"],
    details:
      "Discover the Acacus: a breathtaking natural museum of desert and mountain vistas, where 10,000‑year‑old rock art brings ancient wildlife and human stories to life — an unforgettable, once‑in‑a‑lifetime adventure."
  },
  {
    id: 1,
    title: "Ghdames - Awinat",
    location: "Ghdames - Bir Azar - Atshan - Tinhedan - Dewana - Mghedit - Awinat",
    image: Kiwiana,
    category: ["Desert Trips"],
    details:
      "Ghadames, the Pearl of the Desert, is a UNESCO‑protected Berber town in southwestern Libya. Once a vital caravan hub, its beautifully preserved old town is a cultural treasure you simply cannot miss."
  },
  {
    id: 2,
    title: "Sebha - Waw - Baezima - Jalu",
    location:
      "Alnamous Sebha - Tmissa - Graret Amhmed - Waw Alkabier - Waw - Alnamous - Baezima - Jalu",
    image: Quito,
    category: ["Desert Trips"],
    details: ""
  },
  {
    id: 3,
    title: "Fugha - Waw Alnamous",
    location: "Fugha - Black Mountains - Khlfalah - Wadi AlAteb - Waw Alnamous",
    image: Anchorage,
    category: ["Desert Trips"],
    details: ""
  },
  {
    id: 4,
    title: "Zella - Black Mountains - Al Namous",
    location: "Zella - Alharuj - Alateb - Waw Alnamous",
    image: Cuzco,
    category: ["Desert Trips"],
    details: ""
  },
  {
    id: 5,
    title: "Kufra - Awinat - Jaghboub",
    location:
      "Kufra - Arkno - Jabalawinat - Sudan Border - Jabal Alhwaish - Sand Sea Desert - Jaghboub",
    image: Ushuaia,
    category: ["Desert Trips"],
    details: ""
  },
  {
    id: 6,
    title: "Tripolitanya  Cyrena Apollonia",
    image: Santiago,
    location: "Cyrena",
    category: ["Coastal Trips"],
    details: "The History And The Silent Treasures An Ancient City Near The Northern Coast Of Africa, In Cyrenaica. It Was A Greek Colony Founded ( C.630) By Aristotle Of Thera."
  },
  {
    id: 7,
    title: "T r i p o l i t a n y a - G h a d a m e s ",
    image: Explorer,
    location: "G h a d a m e s",
    category: ["Coastal Trips"],
    days: "1 night",
    price: 99,
    afterDiscount: 0,
    rating: 4,
    reviews: 22,
    details: "T h e  P e a r l  O f  T h e  D e s e r t Located In South- western Libya Desert. For Centuries Ghadames Has Been An Important Trading Town For Many Caravans Originated From And Ended Their Journey At Ghadames . "
  }
];


export const tourDetails = {
  title : "Beautiful Bali with Malaysia",
  des: ` Bali, the land of gods, invites you with stunning temples, lush landscapes, and vibrant culture. More than just theory, this journey delivers hands‑on, step‑by‑step experiences designed to inspire and immerse you..`,
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Bali - Ubud',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Ngurah International Airport',
    '<strong className="font-bold">End Point:</strong>  Ngurah International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary:[
    {
      title : `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title : `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des:`Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    
  ],

  included:[
    'Comfortable stay for 4 nights in your preferred category Hotels',
    'Professional English speaking guide to help you explore the cities',
    'Breakfast is included as mentioned in Itinerary.',
    'Per Peron rate on twin sharing basis',
    'Entrance Tickets to Genting Indoor Theme Park    ',
    'All Tours & Transfers on Seat In Coach Basis ',
    'Visit Bali Safari & Marine Park with Jungle Hopper Pass    ',

  ],
  exclusion:[
    'Lunch and dinner are not included in CP plans',
    'Any other services not specifically mentioned in the inclusions',
    'Medical and Travel insurance',
    'Airfare is not included ',
    'Early Check-In & Late Check-Out ',
    'Anything which is not specified in Inclusions    ',

  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ],
};
