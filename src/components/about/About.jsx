
import './about.css'
import ME from '../../assets/me-about.jpg'
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiLeetcode className='about__icon' />
              <h5>Leetcode</h5>
              <a href="https://leetcode.com/u/yaaassmeen06/" target="_blank">Link</a>
            </article>
            <article className='about__card'>
              <SiCodeforces className='about__icon' />
              <h5>Codeforces</h5>
              <a href="https://codeforces.com/profile/yasmeen06" target="_blank">Link</a>
            </article>
            <article className='about__card'>
              <SiCodechef className='about__icon' />
              <h5>Codechef</h5>
              <a href="https://www.codechef.com/users/yasmeencodes" target="_blank">Link</a>
            </article>
            <article className='about__card'>
              <FaGithub className='about__icon' />
              <h5>Github</h5>
              <a href="https://github.com/yaaassmeen" target="_blank">Link</a>
            </article>
          </div>

          <p>
          I am a senior student majoring in Information Technology at the National Institute of Technology, Raipur. Currently, I am honing my problem-solving skills in Data Structures and Algorithms (DSA) and Competitive Programming, having successfully tackled over 600+ problems on platforms like LeetCode and GeeksforGeeks.
          <br/>
          My passion for web development drives me to actively engage in the field. I have completed several projects utilizing HTML, CSS, JavaScript, and React.js, where I strive to create intuitive and impactful user experiences.
          <br/>
          Additionally, I have a keen interest in designing with tools like Figma and exploring the realms of Machine Learning.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About