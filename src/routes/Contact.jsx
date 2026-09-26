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
        heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjmgm_UQqwPbjYV135Xhm3_ijL0bvy0ANBTi2qOA4ozCINvQHHlqWeSM&s=10"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;