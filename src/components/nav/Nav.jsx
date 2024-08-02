import React from 'react'
import './nav.css'
import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHomeFilled /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfoio' ? 'active' : ''}><IoIosApps /></a>
      <a href="#skills" onClick={()=> setActiveNav('#sills')} className={activeNav === '#skills' ? 'active' : ''}><FaCode /></a>
      <a href="#educations" onClick={()=> setActiveNav('#educations')} className={activeNav === '#educations' ? 'active' : ''}><FaGraduationCap /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav