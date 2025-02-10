function Nav() {
    return (
        <>
        <header className = 'nav-container'>
            <h1 className = 'logo'><a href="#">Logo Placeholder</a></h1>
            <div className = 'nav-content'>
                <nav className = 'nav-left'>
                    <h4><a href="#">Illustrations</a></h4>
                    <h4><a href="#">Projects</a></h4>
                </nav>
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