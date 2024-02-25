import React from 'react'

function Skills() {

    const skills = [
        'ServiceNow',
        'Python',
        'Java',
        'C++',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Express.js',
        'MySQL',
        'MongoDB',
        'SASS',
        'Material UI',
        'Git',

    ]

    return (
        <div className='skills' id='skills'>
            <div className="skills-container">
                <h2>My Skills</h2>

                <ul className='skills_list'>
                    {skills.map((skill, i) => (
                        <li className='skills_list-item btn btn--plain' key={i}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
        </div>

    )
}

export default Skills