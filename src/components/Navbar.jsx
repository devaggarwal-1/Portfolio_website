import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
    return (
        <div className='navbar'>
            <nav className='nav'>
                <h3 className='logo'>Dev</h3>
                <ul className='nav-links'>
                    <AnchorLink href='#home'><li><button>Home</button></li></AnchorLink>
                    <AnchorLink href='#about'><li><button>About</button></li></AnchorLink>
                    <AnchorLink href='#skills'><li><button>Skills</button></li></AnchorLink>
                    <AnchorLink href='#projects'> <li><button>Projects</button></li></AnchorLink>
                    <AnchorLink href='#contact'><li><button>Contact</button></li></AnchorLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar