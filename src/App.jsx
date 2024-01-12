import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Products/Product'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials.jsx/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from "./components/Popup/Popup";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
  AOS.refresh();
 },[] )
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Product />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Product />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
  )
}

export default App