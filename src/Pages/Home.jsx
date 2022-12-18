import React from "react";
import Dashboard from '../components/Dashboard'
import About from '../components/About'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Howitworks from '../components/Howitworks'
import Regiscoin from '../components/Regiscoin'
import Personna from '../components/Personna'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Contact from '../components/Contact'

function Main() {
  return (
    <>
        <Dashboard/>
        <About/>
        <Features/>
        <Benefits/>
        <Howitworks/>
        <Regiscoin/>
        <Personna/>
        <Roadmap/>
        <Team/>
        <Contact/>
    </>
  )

}

export default Main;
