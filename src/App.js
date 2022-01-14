import About from "./components/About";
import Carousel from "./components/Carousel";
import ChooseUs from "./components/ChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Nav1 from "./components/Nav1";
import Navbar from "./components/Navbar";
import ProductCar from "./components/ProductCar";
import Products from "./components/Products";


function App() {
  return (
    <div className="App">
      {/* <Nav1 /> */}
     <Navbar />
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
