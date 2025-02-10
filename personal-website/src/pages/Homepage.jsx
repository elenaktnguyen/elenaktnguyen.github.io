import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

import card from "../assets/card_placeholder.png";

function Homepage() {
    return (
        <>
            <Nav/>
            <div className = "homeContent">
                <div className = "homeImage">
                    <h1>Elena Nguyen</h1>
                </div>
            </div>

            <div className = "slide1">
                <div className = "content1">
                    <h1 className="title1">Website Overview</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, ex commodi incidunt expedita est obcaecati omnis, perspiciatis harum rem facilis hic similique velit eos pariatur impedit dolore natus, nihil cupiditate.</p>
                    <h2 className = "subtitle1">Subtitle text</h2>
                </div>
            </div>

            <hr/>
            <div className = "slide2">
                <div className = "content2" >
                    <h1 className="title2">Card Description</h1>
                    
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>
                    <p><a href="#"><img class="card" src={card} alt="Card to [page]"></img></a></p>       
                
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, ex commodi incidunt expedita est obcaecati omnis, perspiciatis harum rem facilis hic similique velit eos pariatur impedit dolore natus, nihil cupiditate.</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage;