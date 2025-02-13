import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

import illImage from "../assets/illustration_image.png";
import clown from "../assets/galleryImages/clown.png";
import angels from "../assets/galleryImages/angels.png";
import shops from "../assets/galleryImages/shops.png";
import bunny from "../assets/galleryImages/bunny.png";
import moon from "../assets/galleryImages/moon.png";
import dress from "../assets/galleryImages/dress.png";
import hobie from "../assets/galleryImages/hobie_brown.png";
import concept from "../assets/galleryImages/spiderman_concept.png";
import pokemon from "../assets/galleryImages/pokemon.png";
import dog from "../assets/galleryImages/dog.png";
import graphic from "../assets/galleryImages/graphic_design.png";

function Illustration() {
    return (
        <>
            <Nav/>
            <div className = "illustration-content">
                <div className = "illustration-image" style={{
                    backgroundImage: `url(${illImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    width: "100%"
                }}>
                    <button type="button">
                        <a href="#gallery" className="view-button">TAKE A LOOK!</a>
                    </button>
                </div>
            </div>

            <div className = "illustration-slide-1" >
                <h1 className="" id="gallery">My Gallery</h1>
                <div className = "illustration-content-1">
                    <img className="card" style = {{width: "29.5%"}} src={bunny} alt="Bunny girl art"></img>
                    <img className="card" style = {{width: "29.5%"}} src={moon} alt="Moon girl art"></img>
                    <img className="card" style = {{width: "29.5%"}} src={dress} alt="Dress girl image"></img>
                </div>
                <div className="illustration-content-1">
                    <img className="card" style = {{width: "29.5%"}} src={concept} alt="Concept art"></img>
                    <img className="card" style = {{width: "63.5%"}} src={hobie} alt="Hobie Brown art"></img>
                </div>
                <div className="illustration-content-1">
                    <img className="card" style = {{width: "29.5%"}} src={pokemon} alt="Pokemon art"></img>
                    <img className="card" style = {{width: "29.5%"}} src={graphic} alt="Pokemon art"></img>
                    <img className="card" style = {{width: "29.5%"}} src={dog} alt="Dog art"></img>
                </div>
                <div className = "illustration-content-1">
                    <div className="pic-wrapper">
                        <img className="card" style = {{height: "45%"}} src={clown} alt="Clown art"></img>
                        <img className="card" style = {{height: "45%"}} src={shops} alt="Shop art"></img>
                    </div>
                    <img className="card" style = {{width: "47.5%"}} src={angels} alt="Angel art"></img>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}

export default Illustration;