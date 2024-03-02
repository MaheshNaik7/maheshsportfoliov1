import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div>
           <footer className="footer">
                <div className="footer-first">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                </div>
                <div className="footer-second">
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
                </div>
                <div className="footer-third">
                <ul>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                </div>
                <div className="footer-fourth">
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </div>
                <div className="footer-rights">
                <h3>Mahesh's Developer Portfolio</h3>
                </div>
             </footer>
        </div>
    )
};

export default Footer;