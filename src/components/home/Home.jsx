import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="welcomeSign">
        <p>Welcome to my <span>Portfolio</span></p>
      </div>
      <div className="projectsBox">
        <a href="#latest" className="latestProject">
         <div>Latest Project</div>
        </a>
        <a href="#allProjects" className="allProjects"> 
         <div >All Projects</div>
        </a>
      </div>
    </div>
  )
}

export default Home