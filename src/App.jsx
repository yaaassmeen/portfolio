import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from './components/testimonials/Educations'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () =>{
    return(
        <>
           <Header /> 
           <Nav />
           <About />
           <Portfolio />
           <Skills />
           {/* <Services /> */}
           <Testimonials />
           <Contact />
           <Footer />
        </>
    )
}
export default App;