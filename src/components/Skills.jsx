import React from 'react'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>My Skills</h2>

            <div className="row">

                <div className="item">
                    <div className="item-text">
                        <span>Javascript</span>
                        <span className='w-90'>90%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-90">

                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="item-text">
                        <span>HTML5</span>
                        <span className='w-95'>95%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-95">

                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="item-text">
                        <span>CSS3</span>
                        <span className='w-80'>80%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-80">

                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="item-text">
                        <span>React</span>
                        <span className='w-75'>75%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-75">

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Skills