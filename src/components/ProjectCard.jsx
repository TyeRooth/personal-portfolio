import "./ProjectCard.css";
import "../App.css";

import test from '../assets/testproject.png';

import Icon from '@mdi/react';
import { mdiGithub, mdiEyeArrowRight } from '@mdi/js';

const ProjectCard = () => {
    return (
        <div className="root shadow">
            <img src={test} alt="placeholder" className="project-image"></img>
            <div className="project-heading">
                <h3>Project Name</h3>
                <div className="project-links">
                    <a href="https://github.com/TyeRooth/personal-portfolio" className="proj-link">
                        <Icon className="icon" path={mdiGithub} size="3em" />
                    </a>
                    <a href="http://localhost:3000/" className="proj-link">
                        <Icon className="icon" path={mdiEyeArrowRight} size="3em" />
                    </a>
                </div>
            </div>
            <p className="project-description">Describing the project</p>
        </div>
    );
};

export default ProjectCard;