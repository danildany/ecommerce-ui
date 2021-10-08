import React from "react";
import Announce from "../Announce";
import Categories from "../Categories";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Newsletter from "../Newsletter";
import Products from "../Products";
import Slider from "../Slider";

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
