import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';

function Projects() {

    const [projectsArray, setProjectsArray] = useState([]);
    const repoNames = ['StockTracker', 'Chip-8-Emulator', 'Chat-app', 'Portfolio_website',]
    const repoDesc = [
        'StockTracker is a full-stack web application that allows users to search and track stocks efficiently. The platform is built using React for the front end, Node.js and Express.js for the backend, and MongoDB as the database.',
        'This project is a Chip-8 emulator written in Javascript.This emulator aims to recreate the functionality of the Chip-8 system, allowing users to run and play classic Chip-8 games on modern hardware.',
        'This project is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can register, log in, and send messages to each other in real-time.',
        'This is my portfolio website. Made using HTML, CSS, React and animations using framer-motion.',

    ]

    const API = "https://api.github.com";

    useEffect(() => {

        const getProjects = async () => {
            try {
                repoNames.map(async (repo, index) => {
                    const response = await fetch(`${API}/repos/devaggarwal-1/${repo}`)
                    const repoInfo = await response.json();

                    await setProjectsArray((prev) => [...prev, { name: repoInfo.name, url: repoInfo.html_url, updated: repoInfo.updated_at, desc: repoDesc[index] }])
                })

            } catch (error) {
                console.log(error)
            }

        }
        getProjects()

    }, [])



    return (
        <section className="projects" id="projects">
            <h1 className='projects_heading'>Projects</h1>
            <div className="projectContainer">
                {projectsArray.map((project, index) => (
                    <ProjectCard value={project} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects