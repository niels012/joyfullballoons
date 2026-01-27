import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Welcome } from "./components/Welcome";
import { Events } from "./components/Events";
import { Decorations } from "./components/Decorations";
import { Shop } from "./components/Shop";
import { Packages } from "./components/Packages";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Events />
      <Decorations />
      <Shop />
      <Packages />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
