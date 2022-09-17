import "./WorkSection.scss";

import ProjectCard from "./ProjectCard";

const TopSection = () => {
    return (
        <section className="work-section">
            <h2 className="work-heading">My Work</h2>
            <div className="projects-container">
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
};

export default TopSection;