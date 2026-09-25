import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx"
import Trip from "../components/Trip.jsx"
function Service () {


   return (
  <>
  
<Navbar />
  <Hero 
  cName="hero-mid"
   heroImg="https://wallpaperaccess.com/full/4476988.jpg"
   title="Services"
   
   btnClass="hide"
   />
   <Trip />
   <Footer />
  </> 
   );
  }
 

 export default Service;
