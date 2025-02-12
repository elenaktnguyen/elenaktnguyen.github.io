import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import card from "../assets/card_placeholder.png";

import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
            <Nav/>
            <div className = "home-content">
                <div className = "home-image">
                    <h1>Elena Nguyen</h1>
                </div>
            </div>

            <div className = "home-1">
                <div className = "home-content-1">
                    <h1 className="home-title">Website Overview</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, ex commodi incidunt expedita est obcaecati omnis, perspiciatis harum rem facilis hic similique velit eos pariatur impedit dolore natus, nihil cupiditate.</p>
                    <h2 className = "subtitle1">Subtitle text</h2>
                </div>
            </div>

            <hr className = "home-divider"></hr>
            <div className = "home-2">
                <h1 className="home-title">Card Description</h1>
                <div className = "home-content-2" >
                    <div className = "card">
                        <p><Link to = '/about' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(-3deg)"}} src={card} alt="Card to [page]"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><Link to = '/illustration' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(3deg)"}} src={card} alt="Card to [page]"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><a href="#">
                            <img className="card" style = {{transform: "rotate(-3deg)"}} src={card} alt="Card to [page]"></img>
                        </a></p>
                    </div>
                    <div className = "card">
                        <p><Link to = '/project' onClick={() => window.scrollTo(0, 0)}>
                            <img className="card" style = {{transform: "rotate(3deg)"}} src={card} alt="Card to [page]"></img>
                        </Link></p>
                    </div>
                    <div className = "card">
                        <p><a href="https://linkedin.com" target = "blank">
                            <img className="card" style = {{transform: "rotate(5deg)"}} src={card} alt="Card to [page]"></img>
                        </a></p>       
                    </div>
                </div>
                <p className = "card-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, ex commodi incidunt expedita est obcaecati omnis, perspiciatis harum rem facilis hic similique velit eos pariatur impedit dolore natus, nihil cupiditate.</p>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage;