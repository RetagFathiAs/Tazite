import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Gallery from "./components/Gallery/Gallery"
import Tours from "./pages/Tours/Tours";
import Faqs from "./pages/FAQs/Faqs";
import Evisa from "./components/Evisa/Evisa";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/tours" element={<Tours />} />
      <Route path="/gallery" element={<Gallery />} />
            <Route path="/FAQs" element={<Faqs />} />
            <Route path="/Evisa" element ={<Evisa />}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
