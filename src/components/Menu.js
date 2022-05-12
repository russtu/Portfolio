
export const Menu = ({ open, setOpen }) => {
  const zero = 0
  const aboutMe = document.getElementById('footer')?.offsetTop
  const projects = document.getElementById('project-section')?.offsetTop
  const technologies = document.getElementById('footer')?.offsetTop
  const handleClick = () => {
    setOpen(!open)
  }

  const handleClick2 = (coord) => {
    console.log(coord)
    setOpen(!open)
    window.scroll(0,coord)
  }

  return (
    <div id='containerMenu'>
      <div id='closeMenu'><div onClick={handleClick} >✗</div></div>
      <nav id='linksMenu'>
        <p onClick={() => handleClick2(zero)} className='links-Menu' >Home</p>
        <p onClick={() => handleClick2(projects)} className='links-Menu' >Proyectos</p>
        <p onClick={() => handleClick2(technologies)} className='links-Menu' >Tecnologías</p>
        <p onClick={() => handleClick2(aboutMe)} className='links-Menu' >Contacto</p>
      </nav>
    </div>
  )
}


