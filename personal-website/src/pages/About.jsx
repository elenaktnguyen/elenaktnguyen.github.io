import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'

function About() {
    return (
        <>
            <Nav/>
            <div className = "about-slide">
                <div className = "about-content">
                    <div className = "about-content-left">
                        <h1>About me</h1>
                        <p className = "bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ut tempora sed, quia dolorum repellendus veritatis ducimus fugiat fuga perferendis nobis pariatur dolores quisquam amet repellat officiis odio deleniti hic.</p>
                        <h2>Email</h2>
                    </div>
                    <div className = "about-content-right">
                        {/* Todo: Add image */}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;