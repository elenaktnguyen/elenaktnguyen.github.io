import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/temp-logo.png"; /*og dimensions: 768 x 768 */

function Nav() {
    return (
        <>
        <header className = 'nav-container'> 
            <div className = 'nav-content'> 
                <nav className = 'nav-left'> 
                    
                    <h4><Link to = '/illustration'>Illustrations</Link></h4>
                    <h4><Link to = '/project'>Project</Link></h4>
                    
                </nav>
                <a href="#">
                    <Link to = '/'><img class="logo" src={logo} alt="Logo Placeholder"></img></Link>
                </a>
                <nav className = 'nav-right'> 
                    <h4><Link to = '/about'>About</Link></h4>
                    <h4><a href="https://google.com" target = "blank">LinkedIn</a></h4>
                </nav>

            </div>
        </header>
        </>
    );
}

export default Nav;