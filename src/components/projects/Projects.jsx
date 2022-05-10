import './projects.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect } from 'react'



const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  let translate = slideIndex * 100
  
  const carousel = document.querySelector('.carousel-inner')
  
  const rightSlide = () => {
    setSlideIndex(slideIndex + 1)
    if(translate > 200) {
      setSlideIndex(0)
    }      
  }
  
  const leftSlide = () => {
    setSlideIndex(slideIndex - 1)
    if(translate < 100) {
      setSlideIndex(3)
    }  
  }
  if(carousel != null){
     carousel.style.transform = `translateX(-${translate}%)`
  }


  return (
    <div className='projects' id='projects'>
      <div className="latest" id="latest">
        <p>Latest Project</p>
        <div className="container">
          <img src="https://picsum.photos/1000/500" alt="" />
        </div>
      </div>
      <div className="all" id="allProjects">
        <p>All Projects</p>
      <div className='carousel'>
        <div className="left"  onClick={leftSlide}><KeyboardArrowLeftIcon className='icon'/></div>
        <div className="right" onClick={rightSlide}><ChevronRightIcon className='icon'/></div>
        <div className="carousel-inner">        
          <div className="carousel-item-1">
          </div>
          <div className="carousel-item-2">
            
            </div> 
            <div className="carousel-item-3">
            
            </div> 
            <div className="carousel-item-4">
            
            </div>         
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects