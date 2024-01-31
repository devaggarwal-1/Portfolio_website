import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <div className='footer'>
            <hr />
            <div className="container">
                <p><FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />  by Dev Aggarwal</p>
            </div>
        </div>
    )
}

export default Footer