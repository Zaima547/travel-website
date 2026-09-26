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
        heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QuiGSgJbueFu7NSiIYV2VCCm15vE4672fnSYv6j6xcU9FoCd50IoE7k&s=10"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;