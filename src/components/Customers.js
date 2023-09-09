import React, { useEffect, useRef } from "react";
import { skillsWrapper, skillsTitle, line, line2 } from "./Skills.module.scss";
import { Carroussel, wrapper, splideImg } from "./Customers.module.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

const Customers = () => {
  const splideRef = useRef();

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 3,
        focus: "center",
      }).mount();
    }
  }, []);

  return (
    <div className={Carroussel}>
      <div className={skillsWrapper}>
        <p className={skillsTitle}>CLIENTS</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={wrapper}>
        <br></br>
        <div className="splide" ref={splideRef}>
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <img
                  className={splideImg}
                  src="/ministere-transition-eco.png"
                  alt="ministere-transition-eco"
                ></img>
              </li>
              <img
                className={splideImg}
                src="/ministere-transition-eco.png"
                alt="ministere-transition-eco"
              ></img>
              <li className="splide__slide"></li>
              <img
                className={splideImg}
                src="/ministere-transition-eco.png"
                alt="ministere-transition-eco"
              ></img>
              <li className="splide__slide"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
