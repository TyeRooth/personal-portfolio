import './TopSection.css';
import '../App.css';

import headshot from '../assets/tye-800w.jpg';

const TopSection = () => {
    return (
        <section className='top'>
            <div className='top-bg shadow'></div>
            <div className='top-info'>
                <div className='image-container'>
                    <h1 className='full-name'>Tye Rooth</h1>
                    <img src={headshot} alt='tye' className='headshot'></img>
                </div>
                <h1 className='other-name'>Tye Rooth</h1>
                <div className='about-section shadow'>
                    <h2 className='about-heading'>About Me</h2>
                    <p className='about-content'>{about}</p>
                </div>
            </div>
        </section>
    );
};

const about = "Hi there, I am an aspiring software developer that is working on leveling up my skills in both development and in life. I am a firm believer that the internet gives almost everybody the opportunity to educate themselves and take ownership over their future. My goal is to live by that belief which means becoming a self-taught developer. Feel free to check out the results of my adventure below."

export default TopSection;