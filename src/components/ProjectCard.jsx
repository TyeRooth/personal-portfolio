import "./ProjectCard.css";
import "../App.css";

import Icon from '@mdi/react';
import { mdiGithub, mdiEyeArrowRight } from '@mdi/js';

const ProjectCard = (props) => {
    const {name, image, github, preview, description} = props.project;
    return (
        <div className="root shadow">
            <img src={image} alt="placeholder" className="project-image"></img>
            <div className="project-heading">
                <h3>{name}</h3>
                <div className="project-links">
                    <a href={github} className="proj-link">
                        <Icon className="icon" path={mdiGithub} size="3em" />
                    </a>
                    <a href={preview} className="proj-link">
                        <Icon className="icon" path={mdiEyeArrowRight} size="3em" />
                    </a>
                </div>
            </div>
            <p className="project-description">{description}</p>
        </div>
    );
};

export default ProjectCard;