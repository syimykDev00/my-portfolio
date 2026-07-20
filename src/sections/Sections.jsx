import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Sections = () => {
    return (
        <>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        </>
    )
}

export default Sections;