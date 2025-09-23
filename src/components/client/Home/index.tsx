import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import BestSeller from "./BestSeller";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <BestSeller />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
