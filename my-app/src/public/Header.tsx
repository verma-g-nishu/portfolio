import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className="header_main">
        <div className="coustom_container">
            <div className="top_main">
                <div className="logo">
                    Techno
                </div>
                <div className="link_sec">
                    <li><Link to="/" >Home</Link>  </li>
                    <li> <Link to="/" >About</Link>  </li>
                    <li> <Link to="/" >Contact</Link>  </li>
                </div>
                <div className="buttons">
                    <div className="login">
                        <Link to="/">Login</Link>
                    </div>
                    <div className="signup">
                        <Link to="/">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Header