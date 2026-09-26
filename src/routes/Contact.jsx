import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx"
import ContactForm from "../components/ContactForm.jsx";

function Contact () {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aYuHaL1Rbg_6BFDuSTS_OStRG578hYoaWWIV3bqMOnGknX1qbA2kz20A&s=10"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;