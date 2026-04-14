import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
