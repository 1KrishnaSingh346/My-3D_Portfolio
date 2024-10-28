import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText }) =>
    (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
// use for reusable doing multiple things according to the stages, best way for reusing components 
const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Krishna</span>👋
        <br/>
        A Software Engineer from India
        </h1>
    ),
    2 : (
        <InfoBox
                text= 'Worked with many compaines and picked up many skills along the way'
                link="/about"
                btnText='Learn more'
        />
    ),
    3 : (
        <InfoBox
            text= 'Led multiple projects to success over the years. Curious about the impact?'
            link="/projects"
            btnText='Vist my portfolio'
    />
    ),
    4 : (
        <InfoBox
            text= "Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk"
    />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null ;
}

export default HomeInfo