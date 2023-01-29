import React, { Component } from "react";
import FormReservasi from "../components/FormReservasi";

export class Reservasi extends Component {
  render() {
    return (
      <div className="dark:text-white scroll-smooth container md:w-[1280px] mx-auto text-neutral-900">
        <FormReservasi />
      </div>
    );
  }
}

export default Reservasi;
