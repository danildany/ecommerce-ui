import React from "react";
import Announce from "../Components/Announce";
import Categories from "../Components/Categories";
import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
