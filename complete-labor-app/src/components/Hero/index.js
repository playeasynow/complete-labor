import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center pt-4" alt="complete labor" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
