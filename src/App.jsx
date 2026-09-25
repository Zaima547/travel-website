import "./components/Navbarstyles.css";
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Service from "./routes/Service.jsx";
import Contact from "./routes/Contact.jsx";



export default function App () {
    return(
         <BrowserRouter> 
            
            
        <div className="App">
             <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
            
        </div>
         </BrowserRouter>
         
        
    )
}