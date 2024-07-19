import { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/HotelIntro.css";
import Intro from "../component/Intro.js";

function HotelIntro() {

  return (
    <div className="hotelBody">
      <Intro />
    </div>
  );
}

export default HotelIntro;
