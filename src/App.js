import './index.css';
import Home from "./components/home/Home";
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { useEffect, useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const [isBackToTopActive, setBackToTopActive] = useState(false)
  const [scrollOffset, setScrollOffset] = useState('0')


  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${scrollTotal / heightWin * 100}%`;
    setScrollOffset(scroll)
    if(window.pageYOffset > 300) {
      setBackToTopActive(true)
    } else {
      setBackToTopActive(false)
    }
  }


  const handleBacktoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }) 
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Home/>
      <Sidebar/>
      <Navbar />
      <About/>
      <Projects/>
      <Contact/>

    <div className="scrollIndicator">
        <div className="progressContainer">
          <div className="progressBar" style={{height: `${scrollOffset}`}}></div>
        </div>
        <div className='scrollPercent'>{Math.floor(parseFloat(scrollOffset))}%</div>
      </div>
    <div className={`${isBackToTopActive ? 'scrollTopTopBtn active' : 'scrollTopTopBtn'}`} onClick={handleBacktoTop}><KeyboardArrowUpIcon className='icon'/></div>
    </div>
  );
}

export default App;
