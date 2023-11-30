import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.scss"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import projectImg from "./assets/img/project.png"
import userImg from "./assets/img/user.png"



function App() {
  return (

    <div className="wrapper">

      <Routes>
        <Route path='/hero' element={<Hero />}></Route>
        <Route path='/banner' element={<Banner />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/header' element={<Header />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/footer' element={<Footer />}></Route>




      </Routes>

    </div>
  );
}

export default App;
