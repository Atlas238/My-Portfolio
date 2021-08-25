import React from 'react';
import bbImage from './assets/images/battle-brands-petpage.PNG';
import calRepImage from './assets/images/cal-replacer.PNG';
import weatherImage from './assets/images/weather-dashboard-portfolio-feature.PNG';
import './css/workStyle.css';

export default function Work() {
    
    const projects = [
        {
            title: 'Calorie Replacer',
            src: calRepImage,
            alt: 'Calorie Replacer Home View',
            desc: "A workout-oriented application that after taking in user information, as well as a user's recent workouts, generates a total calories burned statistic that is then used to calculate how many of a given recipe a user just burnt off.",
            repo: 'https://github.com/rangamboa/training-calorie-tracker',
            deploy: 'https://rangamboa.github.io/training-calorie-tracker/'
        },
        {
            title: 'Weather Dashboard',
            src: weatherImage,
            alt: 'Weather Dashboard Home View',
            desc: "A simple weather application that pulls a visitors city and provides current weather as well as a 7 day forecast.",
            repo: 'https://github.com/Atlas238/weather-dashboard',
            deploy: 'https://atlas238.github.io/weather-dashboard/'
        },
        {
            title: 'Battle Brands',
            src: bbImage,
            alt: 'Battle Brands Pet Page',
            desc: "A digital pet collecter application with a tech-oriented spin. Create your own account, link your social media accounts and start playing with your new digital creature!",
            repo: 'https://github.com/Atlas238/battle-brands',
            deploy: 'https://battle-brands.herokuapp.com/'

        }
    ]

    return (
        <div className="myWorkSection">

            <h2>My Work</h2>

            <div className="workContainer">
                {
                    projects.map((project) => {
                        return (
                          <div className="card">
                            <div className="cardHeader">
                              <h4>{project.title}</h4>
                            </div>
                            <div className="cardBody">
                                <img src={project.src} alt={project.alt}></img>
                              <p>{project.desc}</p>
                            </div>
                              <ul className="cardLinks">
                                <li className="cardLink"><a 
                                    href={project.repo}
                                    >Visit Repository</a></li>
                                <li className="cardLink"><a 
                                    href={project.deploy}
                                    >Visit Deployment</a></li>
                              </ul>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

