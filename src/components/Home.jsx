import React from 'react'
import user from "../assets/user.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import AnchorLink from "react-anchor-link-smooth-scroll"


function Home() {
    return (
        <div className='home' id='home'>

            <div className="home_main">
                <h1 className='heading'><span>Hi,</span> <span>I'am Dev Aggarwal</span> <span>Web Developer</span></h1>
                <AnchorLink href='#contact'><button className='contact_btn'>Contact<FontAwesomeIcon icon={faAddressBook} /></button></AnchorLink>
            </div>

            <img src={user} alt="" className='img' />
        </div>
    )
}

export default Home