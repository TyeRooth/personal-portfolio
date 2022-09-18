import "./WorkSection.css";

import ProjectCard from "./ProjectCard";

//screenshots from projects
import whereIsMario from '../assets/where-is-mario.png';
import shoppingCart from '../assets/shopping-cart.png';

const TopSection = () => {
    const projectCards = projects.map((project) => {
        return <ProjectCard project={project} key={project.name} />
    });

    return (
        <section className="work-section">
            <h2 className="work-heading">My Work</h2>
            <div className="projects-container">
                {projectCards}
            </div>
        </section>
    );
};

const projects = [
    {
        name: "Where is Mario",
        image: whereIsMario,
        github: "https://github.com/TyeRooth/where-is-mario",
        preview: "https://where-s-mario.web.app/",
        description: "test description"
    },
    {
        name: "Shopping Cart",
        image: shoppingCart,
        github: "https://github.com/TyeRooth/shopping-cart",
        preview: "https://tyerooth.github.io/shopping-cart/",
        description: "another test description"
    },
]

export default TopSection;