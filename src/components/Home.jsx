import React, { useState } from 'react'
import user from "../assets/user.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            type: "string"
        }
    },
    scroll: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 1.5,
            repeat: Infinity
        }
    },
}



function Home() {
    return (
        <div className='home' id='home'>

            <motion.div className="home_main" variants={variants} initial="initial" animate="animate">
                <motion.h1 className='heading' variants={variants}><span>Hi,</span> <span>I'am Dev Aggarwal</span> </motion.h1>
                <motion.div className="socials" variants={variants}>
                    <motion.a href="https://www.linkedin.com/in/dev-aggarwal-a1b284190/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></motion.a>
                    <motion.a href="https://github.com/devaggarwal-1" target="_blank"><FontAwesomeIcon icon={faGithub} /></motion.a>
                    <motion.a href="https://twitter.com/lazybum191" target="_blank"><FontAwesomeIcon icon={faTwitter} /></motion.a>

                </motion.div>
                <motion.img src="./scroll.png" alt="" className='scroll_img' variants={variants} animate="scroll" />
            </motion.div>

            <img src="user1.jpg" alt="" className='home_img user-img' />
        </div>
    )
}

export default Home
