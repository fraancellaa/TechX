import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import './home.css'
const Home = () => {
  return (
    <>
    <Hero />
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
