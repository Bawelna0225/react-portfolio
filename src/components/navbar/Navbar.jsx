import './navbar.css'
import { useState, useEffect } from 'react';


const Navbar = () => {

  const [isNavbarActive, setNavbarActive] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)



  const handleScroll = () => {
    if(window.pageYOffset > 80) {
      setNavbarActive(true)
    }
    else {
      setNavbarActive(false)
    }
  }

  
  const handleOpenMenu = () => {
    const sideMenu = document.querySelector('.sideMenu')
   setMenuOpen(!isMenuOpen)
 }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${isNavbarActive ? 'navbar active' : 'navbar'}`}>
    <ul className="navItems">
        <li className="navItem"><a href="#home">Home</a></li>
        <li className="navItem"><a href="#about">About</a></li>
        <li className="navItem"><a href="#contact">Contact</a></li>
    </ul>
    <div className={`${isMenuOpen ? 'navMenu open' : 'navMenu'}`} onClick={handleOpenMenu}>
        <div className='barTop'></div>
        <div className='barMid'></div>
        <div className='barBottom'></div>
      </div>
      <div className={`${isMenuOpen ? 'sideNavMenu open' : 'sideNavMenu'}`}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
</div>
  )
}

export default Navbar