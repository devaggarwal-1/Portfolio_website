import React, { useEffect, useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

function Navbar() {

    const [scrolled, setScrolled] = useState(false)
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const handleClick = (e) => {
        setCurrentPage(e.target.value)
    }

    //framer-motion variants

    const frameVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,

            transition: {
                staggerChildren: 0.2,
            }
        }
    };


    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,

            }
        }
    };

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <nav className='nav'>
                <motion.h3
                    className={`logo ${scrolled ? 'scrolled' : ''}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Dev
                </motion.h3>
                <motion.ul className={`nav-links ${scrolled ? 'scrolled' : ''}`} variants={frameVariants} initial="hidden" animate="visible">

                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={currentPage === 'home' ? 'active' : ''}><AnchorLink href='#home' ><button value='home' onClick={handleClick}>Home</button></AnchorLink></motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={currentPage === 'about' ? 'active_scrolled' : ''}><AnchorLink href='#about' ><button value='about' onClick={handleClick}>About</button></AnchorLink></motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={currentPage === 'skills' ? 'active_scrolled' : ''}><AnchorLink href='#skills'><button value='skills' onClick={handleClick}>Skills</button></AnchorLink></motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={currentPage === 'projects' ? 'active_scrolled' : ''}><AnchorLink href='#projects'> <button value='projects' onClick={handleClick}>Projects</button></AnchorLink></motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={currentPage === 'contact' ? 'active_scrolled' : ''}><AnchorLink href='#contact'><button value='contact' onClick={handleClick}>Contact</button></AnchorLink></motion.li>

                </motion.ul>
            </nav>
        </div >
    )
}

export default Navbar