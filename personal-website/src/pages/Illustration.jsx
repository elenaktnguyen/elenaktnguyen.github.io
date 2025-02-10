import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

function Illustration() {
    return (
        <>
            <Nav/>
            <div className = "illustration-content">
                <div className = "illustration-image">
                    <h1>Illustration page</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis officiis quidem sint corrupti necessitatibus assumenda. Beatae, ad consequatur!</p>
                    <button type="button">
                        <a href="#gallery">Take a look!</a>
                    </button>
                </div>
            </div>

            <div className = "illustration-slide-1" >
                <h1 className="" id="gallery">My Gallery</h1>
                <div className = "illustration-content-1">
                    {/* Placeholder, upload art as needed*/}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Illustration;