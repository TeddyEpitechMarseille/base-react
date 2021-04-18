import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="about">
            <Navigation/>
            <Logo/>
            <h1>À Propos</h1>
        </div>
    );
};

export default About;