
import React from 'react'
import Destination from "../components/Destination.jsx";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx"

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://png.pngtree.com/background/20230612/original/pngtree-cruise-royale-of-the-seas-ship-sailing-alone-in-the-ocean-picture-image_3182848.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer/>
    </>
  );
}

export default Home;