import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="banner_size">
      <div className="banner_text">
        <h1 className="banner_header">Vehicles Collection</h1>
        <div className="type_style">
          <Typewriter
            options={{
              strings: [
                "Car Collection",
                "Vanity Van Collection",
                "Bus collection",
                "Truck & Every kind of truck",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>

        <button className="custom_button">See More TransPort</button>
      </div>
    </div>
  );
};

export default Banner;
