import About from "./components/About";
import Carousel from "./components/Carousel";
import ChooseUs from "./components/ChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Nav1 from "./components/Nav1";
import Navbar from "./components/Navbar";
import ProductCar from "./components/ProductCar";
import Products from "./components/Products";
import {useState} from "react"


function App() {
  const [display,setDisplay]=useState(false)
  console.log(display)
  return (
    <div className="App">
      <Navbar setDisplay={setDisplay} />
      <div style={{display:display?"block":"none"}} className='res-div '>
          <ul style={{listStyleType :"none"}}>
            <li className="active"><a style={{color:"#282c39",fontWeight:"800",fontSize:"1.5rem"}} className="me-2 my-5" href="index.php">Home</a></li>
            <li><a style={{color:"#282c39",fontWeight:"800",fontSize:"1.5rem"}} href="products.php">Products</a></li>
            <li><a style={{color:"#282c39",fontWeight:"800",fontSize:"1.5rem"}} href="about us.php">About Us</a></li>
            <li><a style={{color:"#282c39",fontWeight:"800",fontSize:"1.5rem"}} href="Contactus.php">Contact Us</a></li>
          </ul>
        
      </div>
      <Carousel />
      <ChooseUs />
      <ProductCar />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
