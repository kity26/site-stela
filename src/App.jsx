import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import NousRejoindre from "./components/NousRejoindre"
import Tournois from "./components/Tournois"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import gradientImg from "/gradient.png";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  }, [])

  return (
    <main>
      {/* Gradient image */}
      <img className="absolute top-0 right-0 opacity-60 -z-1" src={`${import.meta.env.BASE_URL}gradient.png`} alt="Gradient-img" />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#FF1493] -rotate-[30deg] -z-10"></div>
     
      <Header/>

      <Routes>
        {/* Accueil / page principale */}
        <Route path="/" element={<Hero />} />
        <Route path="/accueil" element={<Hero />} />

        {/* Autres pages */}
        <Route path="/nous-rejoindre" element={<NousRejoindre />} />
        <Route path="/tournois" element={<Tournois />} />
      </Routes>

      <Footer />
     </main>
  )
}