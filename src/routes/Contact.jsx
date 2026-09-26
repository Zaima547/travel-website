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
        heroImg="https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ="
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;