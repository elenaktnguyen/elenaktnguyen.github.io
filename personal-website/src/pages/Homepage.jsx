import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

import card from "../assets/card_placeholder.png";

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
                <div className = "content-2" >
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>       
                </div>
                <p className = "card-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, ex commodi incidunt expedita est obcaecati omnis, perspiciatis harum rem facilis hic similique velit eos pariatur impedit dolore natus, nihil cupiditate.</p>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage;