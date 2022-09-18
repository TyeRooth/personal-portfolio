import "./WorkSection.css";

import ProjectCard from "./ProjectCard";

//screenshots from projects
import whereIsMario from '../assets/where-is-mario.png';
import shoppingCart from '../assets/shopping-cart.png';
import sharkMemory from '../assets/shark-memory.png';
import battleship from '../assets/battleship.png';
import weatherApp from '../assets/weather-app.png';
import adminPage from '../assets/admin-page.png';

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
        description: "The goal of the game is to find 4 Nintendo characters within an image. " +
        "This is meant to be like a Where's Waldo game. " + "This project uses Firebase for the back-end."
    },
    {
        name: "Shopping Cart",
        image: shoppingCart,
        github: "https://github.com/TyeRooth/shopping-cart",
        preview: "https://tyerooth.github.io/shopping-cart",
        description: "A fake cryptocurrency store with cart functionality. " +
        "This project was my introduction to react routing and testing."
    },
    {
        name: "Shark Memory",
        image: sharkMemory,
        github: "https://github.com/TyeRooth/shark-memory",
        preview: "https://tyerooth.github.io/shark-memory/",
        description: "The goal of this game is to click on a Shark you have not clicked on yet. " +
        "The positions of the sharks get shuffled each time you click on a new shark."
    },
    {
        name: "Battleship",
        image: battleship,
        github: "https://github.com/TyeRooth/Battleship",
        preview: "https://tyerooth.github.io/Battleship/dist/index.html",
        description: "This player VS computer Battleship game was created with pure javascript, css, and html. " +
        "The game will guide you through placing your ships and attacking your enemy."
    },
    {
        name: "Weather App",
        image: weatherApp,
        github: "https://github.com/TyeRooth/weather-app",
        preview: "https://tyerooth.github.io/weather-app",
        description: "The classic weather app. " +
        "Feel free to type in your location and the information on this page will be updated. " +
        "This is powered by Open Weather API."
    },
    {
        name: "Admin Page",
        image: adminPage,
        github: "https://github.com/TyeRooth/admin-dashboard",
        preview: "https://tyerooth.github.io/admin-dashboard/",
        description: "Admin Dashboard for a fake social media and project posting site. " +
        "This is a static page and one of my more visually appealing projects."
    },
]

export default TopSection;