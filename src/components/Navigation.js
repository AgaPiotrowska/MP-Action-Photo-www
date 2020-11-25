import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom"

const Navigation = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleHamburgerClick = () => {
        setShowSidebar (true);
    };

    return(
        <nav className="page-header">
            <div className="image-header">
                <a href="/"><img src="./images/logo.png" height="100px" alt="LogoMPAction" className="page-header-logo"/></a>
            </div>
            <button onClick={handleHamburgerClick} className="hamburger" id="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <ul onClick={() => setShowSidebar (false)} className={"nav-links" + (showSidebar ? " show" : "")} id="nav-links">
                <li className="close-side-bar">
                    <div><img src="images/close.svg" width="20px" alt="close"/></div></li>
                <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                <li><Link to="/blogpage">MIGAWKI</Link></li>
                <li><Link to="/videopage">VIDEO</Link></li>
                <li><Link to="/about">O MNIE</Link></li>
                <li className="realization-link"><Link to="/realizationspage" >REALIZACJE</Link>
                    <ul className="realizations">
                        <li><Link to="/portfolio/obt">obt</Link></li>
                        <li><Link to="/portfolio/sona">sona</Link></li>
                        <li><Link to="/portfolio/flower">flower my day</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;