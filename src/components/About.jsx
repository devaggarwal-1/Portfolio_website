import React from 'react'
import user from "../assets/user.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

function About() {
    return (
        <div className='about' id='about'>
            <h1 className='about_heading'>About Me</h1>

            <div className="about_body">
                <img src={user} alt="" className='about_img' />

                <div className="intro_cv">
                    <h3>
                        akdnsfjksndfkjsndfkjbnsdkfnskdfnskjdfn
                        sjdnbfkjsbdfkjsdbnfkjsnfkjsndfkjsndkjn
                        sjkdbfksdbkjbsdfjbsdkfbsdkjlbnflksdbfkl

                    </h3>
                    <button className='resume_btn'>Download CV<FontAwesomeIcon icon={faFile} className='cvIcon' /></button>
                </div>

            </div>
        </div>
    )
}

export default About