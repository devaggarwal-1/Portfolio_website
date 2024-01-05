import React from 'react'
import user from "../assets/user.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

function About() {
    return (
        <div className='about' id='about'>
            <hr />
            <div className="aboutContainer">

                <h1 className='about_heading'>About Me </h1>

                <div className="about_body">
                    <img src="/user2.jpg" alt="" className='about_img user-img' />

                    <div className="intro_cv">
                        <h3>
                            Hello there! 👋 I'm a passionate web developer eager to transform digital landscapes with my coding prowess.
                            Despite my limited work experience, my skill set speaks volumes about my dedication to the world of web development.

                        </h3>
                        <button className='resume_btn'>Download CV<FontAwesomeIcon icon={faFile} className='cvIcon' /></button>
                    </div>

                </div>

            </div>
            <hr />

        </div>
    )
}

export default About