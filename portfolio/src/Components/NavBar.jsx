import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div>
            <header>
                <nav>
                <div className="left">Mahesh's Portfolio</div>
                <div className="right">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                </nav>
            </header>
        </div>
    )
};

export default NavBar;