import './sidebar.css'
import { useEffect } from 'react';

const Sidebar = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth'
    }) 
  }

  useEffect(() => {
    const scrollDownBtn = document.querySelector('.scrollDown')
    scrollDownBtn.addEventListener('click', handleScrollDown)
  }, [])

  return (
    <div className='sidebar'>
        <div className="logo">LOGO</div>
        <div className="scrollDown">Scroll Down</div>
    </div>
  )
}

export default Sidebar