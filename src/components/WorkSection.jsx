import "./WorkSection.css";

import ProjectCard from "./ProjectCard";

//screenshots from projects
import whereIsMario from '../assets/where-is-mario.png';
import shoppingCart from '../assets/shopping-cart.png';
import sharkMemory from '../assets/shark-memory.png';
import battleship from '../assets/battleship.png';
import weatherApp from '../assets/weather-app.png';
import adminPage from '../assets/admin-page.png';
import todoList from '../assets/todo-list.png';
import signupForm from '../assets/signup-form.png';

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
    {
        name: "Shark Memory",
        image: sharkMemory,
        github: "https://github.com/TyeRooth/shark-memory",
        preview: "https://tyerooth.github.io/shark-memory/",
        description: "Shark Memory Game"
    },
    {
        name: "Battleship",
        image: battleship,
        github: "https://github.com/TyeRooth/Battleship",
        preview: "https://tyerooth.github.io/Battleship/dist/index.html",
        description: "Game of Battleship"
    },
    {
        name: "Weather App",
        image: weatherApp,
        github: "https://github.com/TyeRooth/weather-app",
        preview: "https://tyerooth.github.io/weather-app/dist/index.html",
        description: "An app for finding the weather at your location"
    },
    {
        name: "Admin Page",
        image: adminPage,
        github: "https://github.com/TyeRooth/admin-dashboard",
        preview: "https://github.com/TyeRooth/admin-dashboard",
        description: "Admin Dashboard for a fake social media and project posting site"
    },
    {
        name: "To Do List",
        image: todoList,
        github: "https://github.com/TyeRooth/To_Do_List/tree/main",
        preview: "https://tyerooth.github.io/To_Do_List/",
        description: "A To Do list app"
    },
    {
        name: "Sign Up Form",
        image: signupForm,
        github: "https://github.com/TyeRooth/Sign-Up-Form",
        preview: "https://github.com/TyeRooth/Sign-Up-Form",
        description: "A sign up page form for users to enter their details and set up an account"
    },
]

export default TopSection;