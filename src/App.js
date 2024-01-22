import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Team from "./Components/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div className="flex-grow mt-10">
      {/* Routes */}
      <Routes>
        {/* Set the root URL ("/") to the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen leading-normal tracking-normal text-white gradient">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
