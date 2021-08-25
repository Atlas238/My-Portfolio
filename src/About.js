import React from 'react';
import './css/aboutStyle.css';

export default function About() {
    return (
        <div className="aboutMeBox">
            <h1 className="aboutMeHeader">About Me</h1>
            <div className="aboutMeText">
                <p>My web-dev journey only recently began, after enrolling in the UW Coding Bootcamp this past summer, after a longstanding interest in computers, programming, and technology in general. My family likes to tease me about the fact that my primary motivation to learn to read as a kid was only to understand what was going on in the Legend of Zelda: Orcarina of Time - but I think it paints a pretty fitting picture. My interests have always driven me to learn new things, and that drive has pulled me in quite a few directions through my professional life.</p>
                <p>I graduated from the George Washington University in 2018 with a major in Organizational Science, a music minor, and immedietly ran of to pursue my budding career as a professional musician. While music is still a large part of my life, I ultimately decided that I would find more fulfillment in the techworld and began taking the necessary steps to position myself for success in such a diverse and rapidly growing industry. I plan to continue my education online, including a focus on C++ and C# with the intent to transition into Augmented and Virtual Reality software development.</p>
                <p>I personally believe that Augmented/Mixed Reality is the future of human-computer interaction and will have a profound impact on the experiences we create. We are so close now a completely uncharted frontier and I cannot wait to see where this exciting new technoloy takes us.</p>
            </div>
            <div className="resumeLink">
              <a>My full resume can be downloaded <span>here</span>!</a>
            </div>
        </div>
    )
}