import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"

const ProjectCard = ({ value }) => {

    const { name, url, updated, desc } = value
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const date = new Date(updated)
    const year = date.getFullYear()
    const month = date.getMonth()
    const monthName = monthNames[month];
    const day = date.getDate()
    return (
        <motion.div className='projectCard' whileHover={{ y: -5, transition: { duration: 0.4 } }}>
            <h1>{name}</h1>
            <h2>{desc}</h2>
            <a href={url} target='blank' ><span><FontAwesomeIcon icon={faGithub} /></span> Repo</a>
            <hr />
            <p>Updated on {monthName} {day}, {year}</p>
        </motion.div >
    )
}

export default ProjectCard