import logo from "../assets/temp-logo.png"; /*og dimensions: 768 x 768 */

function Nav() {
    return (
        <>
        <header className = 'nav-container'> 
            <div className = 'nav-content'> 
                <nav className = 'nav-left'> 
                    <h4><a href="#">Illustrations</a></h4>
                    <h4><a href="#">Projects</a></h4>
                </nav>
                <a href="#">
                    <img class="logo" src={logo} alt="Logo Placeholder"></img>
                </a>
                <nav className = 'nav-right'> 
                    <h4><a href="#">About</a></h4>
                    <h4><a href="#">LinkedIn</a></h4>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Nav;