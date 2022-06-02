import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Promo from "../components/Carousel";
import './home.css'
const Home = () => {
  return (
    <>
    <Hero />
    <Promo />
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
    <Footer />
    </>
  );
};

export default Home;
