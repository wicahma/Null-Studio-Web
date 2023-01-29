import React, { Component } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Works from "../components/Works";

export class Home extends Component {
  render() {
    return (
      <div className="dark:text-white scroll-smooth container md:w-[1280px] mx-auto text-neutral-900">
        <Hero />
        <Works />
        <Services />
      </div>
    );
  }
}

export default Home;
