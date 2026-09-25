import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx"
import AboutUs from "../components/AboutUs.jsx"
function About () {


   return (
  <>
  
<Navbar />
  <Hero 
  cName="hero-mid"
   heroImg="https://img.freepik.com/premium-photo/paper-lanterns-narrow-street-gion-kyoto-japan-night_771335-69897.jpg?w=2000"
   title="About"
   
   btnClass="hide"
   />
   <AboutUs/>
   <Footer />
  </> 
   );
  }
 

 export default About;
