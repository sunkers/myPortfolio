import React from "react"
import { container, container2, experience, education, skills } from "./Home.module.scss"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Titre from "../components/Titre"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Customers from "../components/Customers"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className={container}>
        <Titre />
        <div className={container2}>
          <Intro />
          <div className={experience}>
            <Experience />
            <div className={education}>
              <div className={skills}>
                <Education />
                <Skills />
              </div>
              <Projects />
              <Customers />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
