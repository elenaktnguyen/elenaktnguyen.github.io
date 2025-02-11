function ProjectCard({ img, title, description }) {  
    return (
        <div className="project-card">
            <img src={img} alt={title + "image"} className="project-card-img" />
            <h2 className="project-card-title">{title}</h2>
            <p className="project-card-description">{description}</p>
        </div>
    );
}

export default ProjectCard;
