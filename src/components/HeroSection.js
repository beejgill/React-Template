import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/*<video src='../../public/videos/video-2.mp4' autoPlay loop muted />*/}
        <h1>Brandon Gill</h1>
        <p>Check out my first React project</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection