import React from 'react';
import JATE from '../../assets/images/JATE_app.PNG';
import Scheduler from '../../assets/images/scheduler.png';
import Weather from '../../assets/images/weather.png';
import Style from '../../assets/style/deployed.css';

export default function Deployed() {
  return (
    <div className='content'>
      <h3>Deployed Projects</h3>
      <subtitle>Click on a image below to view the repository!</subtitle>
      <div className='cardish'>
        <div className='container'>
          <a className="img-fluid" href="https://github.com/Axelpanic/JATE" target='_blank' rel='noreferrer'>
            <img className="mw-25" src={JATE} alt="just Another Text Editor project" />
            <div class="overlay">
              <div class="text">Just Another Text Editor: Progressive Web App using webpack!</div>
            </div>
          </a>
        </div>
        <div className='container'>
          <a className="img-fluid" href="https://github.com/Axelpanic/improved-guacamole" target="_blank" rel='noreferrer'>
            <img className="mw-25" src={Scheduler} alt='Daily Scheduler project' />
            <div class="overlay">
              <div class="text">Work Day Scheduler: uses Web API for time!</div>
            </div>
          </a>
        </div>
        <div className='container'>
          <a className="img-fluid" href='https://github.com/Axelpanic/Weather-wherever' target='_blank' rel='noreferrer'>
            <img className="mw-25" src={Weather} alt='Weather Dashboard project' />
            <div class="overlay">
              <div class="text">Weather Dashboard: uses foreign API!</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};