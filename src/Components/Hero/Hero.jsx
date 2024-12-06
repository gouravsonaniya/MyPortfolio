import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/MyPhoto.png'

const Hero = () => {
    return (
        <div id='home' className='hero'>
        <img src={profile_img} alt="" />
         <h1><span>Hi, I'm Gourav Sonaniya, Software Engineer</span></h1>
         <p>A passionate software developer skilled in creating responsive, user-friendly web interfaces. I love transforming ideas into visually stunning and functional designs.</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={100} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
            <a href="https://drive.google.com/file/d/1MZyK1-BLOa_18vbV9HvritvWvCVZhegZ/view?usp=drive_link" target='blank' className='anchor-link'>
                        My Resume
                    </a>
            </div>
         </div>
        </div>
    )
}

export default Hero;