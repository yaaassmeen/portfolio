// import React from 'react'
// import './skills.css'
// import { FaCode } from "react-icons/fa";
// function Skills() {
//   return (
//     <section id='experience'>
//       <h5>What Expertise I Have</h5>
//       <h2>My Skills</h2>

//       <div className="container experience__container">

//         {/* FRONTEND */}
//         <div className="experience__frontend">
//           <h3>Frontend Development</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//                 <h4>HTML</h4>
//                 {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>CSS</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Javascript</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Tailwind</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>React</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//           </div>
//         </div>

// {/* BACKEND */}
//         <div className="experience__backend">
//           <h3>Backend Development</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Nodejs</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             {/* <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>ExpressJs</h4>
//               <small className='text-light'>Experienced</small>
//               </div>
//             </article> */}
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>MongoDB</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Firebase</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//           </div>
//         </div>


// {/* CS FUNDAMENTAL */}
//         <div className="experience__fundamentals">
//           <h3>CS Fundamentals</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>OOPS</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Operating System</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>DBMS</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>SQL</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Computer Networks</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//           </div>
//         </div>

// {/* UTILITIES */}
// <div className="experience__fundamentals">
//           <h3>Utilities</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Git</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Github</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Figma</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Canva</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <FaCode className='experience__details-icon'/>
//               <div>
//               <h4>Uizard</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills
import React from 'react'
import './skills.css'
import { FaCode } from "react-icons/fa";

function Skills() {
  return (
    <section id='skills'>
      <h5>What Expertise I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">

        {/* FRONTEND */}
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Javascript</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Nodejs</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            {/* <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>ExpressJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Firebase</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* CS FUNDAMENTALS */}
        <div className="skill__fundamentals">
          <h3>CS Fundamentals</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>OOPS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Operating System</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>DBMS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>SQL</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Computer Networks</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* UTILITIES */}
        <div className="skill__utilities">
          <h3>Utilities</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Git</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Github</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Figma</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Canva</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='skill__details'>
              <FaCode className='skill__details-icon'/>
              <div>
              <h4>Uizard</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
