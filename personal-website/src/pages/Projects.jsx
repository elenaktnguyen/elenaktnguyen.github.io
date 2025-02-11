import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx';
import CardTemplate from "../assets/project_card_image_placeholder.png";

function Projects() {
    return (
        <>
            <Nav/>
            <div className = "proj-slide-1">
                <div className="proj-content-1">
                    <div className="proj-content-1-left">
                        <h1> Project Portfolio</h1>
                        <h4>Elena Nguyen | <a href = "https://www.sfu.ca/fas/computing.html" target = "blank">SFU CS</a></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit esse, odit fugiat voluptatum voluptate voluptatibus rerum? Cum voluptate, assumenda odio nobis rem ipsam sed reprehenderit mollitia, quae iusto deleniti?</p>
                    </div>
                    <div className="proj-content-1-right">
                        {/* Todo: Add image */}
                    </div>
                </div>

                <div className="proj-content-2">
                    <div className = "proj-content-2-languages">
                        <h2>Languages</h2>
                        <ul>Python, C, C++, Java</ul>
                        <ul>HTML, CSS, JS</ul>
                    </div>
                    <hr className="project-divider"></hr>
                    <div className = "proj-content-2-projects">
                        <h2>Project Links</h2>
                        <div className="proj-links">
                            <ProjectCard 
                                img=  {CardTemplate}
                                title="Project 1" 
                                description="Description here" 
                                link = "https://github.com/elenaktnguyen/Sample1"
                                langs = {["HTML", "CSS"]}
                            />
                            <ProjectCard 
                                img=  {CardTemplate}
                                title="Project 2" 
                                description="Description here" 
                                link = "https://github.com/elenaktnguyen/Sample2"
                            />
                        </div>
                    </div>
                    
                </div>  
            </div>
            <Footer/>
        </>
    );
}

export default Projects;