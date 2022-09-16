import './TopSection.scss';

import headshot from '../assets/tye-800w.jpg';

const TopSection = () => {
    return (
        <section className='top'>
            <div className='top-bg'></div>
            <div className='top-info'>
                <div className='image-container'>
                    <h1 className='full-name'>Tye Rooth</h1>
                    <img src={headshot} alt='tye' className='headshot'></img>
                </div>
                <div className='about-section'>
                    <h2 className='about-heading'>About Me</h2>
                    <p className='about-content'>{about}</p>
                </div>
            </div>
        </section>
    );
};

const about = "This is the description for myself I am eventually going to add.  I am just adding this text for to get a feel for the look of this about section.  This top section is definitely the hardest part of this project";

export default TopSection;