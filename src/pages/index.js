import React from "react"
import { container } from "./Home.module.scss"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Titre from "../components/Titre"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Hobbies from "../components/Hobbies"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className={container}>
        <Intro />
        <Titre />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hobbies />
        <Footer />
      </div>
    </div>
  )
}
