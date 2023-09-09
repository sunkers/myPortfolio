import React from "react";
import { container, wrapper } from "./Home.module.scss";
import Header from "../components/Header";
import Contact from "../components/Contact";

const contactPage = () => {
  return (
    <div className={wrapper}>
      <Header />
      <div className={container}>
        <Contact />
      </div>
    </div>
  );
};

export default contactPage;
