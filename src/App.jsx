// src/App.jsx
import React from 'react';
import Header from './header/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main className="pt-20 scroll-smooth">
        <section id="home"><HomePage /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="technologies"><Technologies /></section>
        <section id="certificate"><Certificate /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
