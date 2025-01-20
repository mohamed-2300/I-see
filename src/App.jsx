import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Partner from "./components/Partner/Partner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Partner />
      <Banner3 />
      <Footer />
    </main>
  );
};

export default App;
