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
        heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_zRt0oE4EXdBkFBhT3SZ1QrgWmIXqr4BLudbsCZiK6Y6hKPpctKum5Q&s=10"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;