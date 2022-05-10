import './navbar.css'
import { useState, useEffect } from 'react';


const Navbar = () => {

  const [isNavbarActive, setNavbarActive] = useState(false)


  const handleScroll = () => {
    if(window.pageYOffset > 80) {
      setNavbarActive(true)
    }
    else {
      setNavbarActive(false)
    }
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
</div>
  )
}

export default Navbar