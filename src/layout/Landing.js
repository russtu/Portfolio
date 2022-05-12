import { Menu } from '../components/Menu'
import { FaGithubAlt, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { BsArrowUp } from "react-icons/bs"
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import { BiLinkAlt } from "react-icons/bi"
import { SiExpress, SiJavascript, SiMysql, SiPostman } from "react-icons/si";
import projects from '../data/projects.json'
import { useState } from 'react'
import '../components/Menu.css'
import '../layout/Landing.css'

export const Landing = ({ open, setOpen }) => {

  const handleClick = () => {
    setOpen(!open)
  }
  const positionPresentacion = document.getElementById('presentation-section')?.offsetTop
  const [scrollY, setScrolly] = useState(null)
    window.onscroll = function() {
        let y = window.scrollY
        setScrolly(y)
    }

  return (
    <div>
      {!open &&
        <div id='menu'>
          <div id="buttonMenu" onClick={handleClick}>☰</div>
          <h1 className={ scrollY >= positionPresentacion ? 'menuOn' : 'menuOff' }>RUBÉN CABALEIRO LÓPEZ</h1>
          <div></div>
        </div>
      }
      {open &&
        <Menu open={open} setOpen={setOpen} />}
      <header>
        <div id="title-page">
          <div id='header-title'>
            <h1 id='name'>RUBÉN CABALEIRO LÓPEZ</h1>
            <h1 id='name2'>Portfolio</h1>
          </div>
        </div>
      </header>
      <BsArrowUp onClick={() => window.scroll(0,0)} className='icons scrollTop' />
      <section id="presentation-section">
        <h1 id="description-presentation"> Soy un desarrollador web Fullstack  recién horneado pruébame ...  </h1>
      </section>
      <section id='project-section' >
        <h2 className='title-section'> Proyectos </h2>
        {projects.map(project => {
          return (
            <article key={project.id}>
              <div  className='container-project'>
                <h3 className='title-project'>{project.title}</h3>
                <div className='container-photo-project'>
                  <img className='photo-project' src={project.pictureUrl} alt='foto portfolio'></img>
                </div>
                <div className='links-project'>
                  <div className='github-link'>
                    <a href={project.githubUrl}><FaGithubAlt className='icons' /></a>
                  </div>
                  <div className='link-demo-project'>
                    <a href={project.githubUrlFronted}><BiLinkAlt className='icons' /></a>
                  </div>
                </div>
                <div className='description-project'>{project.description}</div>
                <div className='technologies-project'>{project.tecnologias}</div>
              </div>
            </article>)
        })}
      </section>
      <section id='technologies-section'>
        <h2 className='title-section'> Tecnologías / Conocimientos</h2>
        <ul id='technologies-container'>
          <li className='list-technologies'>
            <FaHtml5 className='icons' />
          </li>
          <li className='list-technologies'>
            <FaCss3Alt className='icons' />
          </li>
          <li className='list-technologies'>
            <SiJavascript className='icons' />
          </li>
          <li className='list-technologies'>
            <FaReact className='icons' />
          </li>
          <li className='list-technologies'>
            <FaNodeJs className='icons' />
            <SiExpress className='icons' />
          </li>

          <li className='list-technologies'>
            <SiMysql className='icons' />
          </li>
          <li className='list-technologies'>
            <SiPostman className='icons' />
          </li>
          <li className='list-technologies'>
            <FaGithubAlt className='icons' />
          </li>
          <li className='list-technologies'>
            <FaFigma className='icons' />
          </li>
        </ul>
      </section>

      <footer id='footer'>
        <h1 className='footer-title'>Sobre mi</h1>
        <span id='arrows'>⇩ ⇩ ⇩</span>
        <a className='footer-links' target='_blank' rel='noreferrer' href='https://github.com/russtu?tab=repositories'><FaGithubAlt className='icons' /></a>
        <a className='footer-links' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ruben-cabaleiro-lopez/'><FaLinkedin className='icons' /></a>
        <a className='footer-links' target='_blank' rel='noreferrer' href="mailto:rubcalop@gmail.com?subject=Questions"><MdEmail className='icons' /></a>
        <p>rubcalop@gmail.com</p>
        <p>+34 609619771</p>
        <p>® 2022 </p>
      </footer>
    </div>
  )
}
