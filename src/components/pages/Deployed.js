import React from 'react';
import JATE from '../../assets/images/JATE_app.PNG';
import Scheduler from '../../assets/images/scheduler.png';
import Weather from '../../assets/images/weather.png';

export default function Deployed() {
  return (
<div className='content'>
    <h3>Deployed Projects</h3>
    <subtitle>Click on a image below to view the repository!</subtitle>
    <div className='cardish'>
      <div className='row'>
        <div className='col'>
          <a className="img-fluid" href="https://github.com/Axelpanic/JATE" target='_blank' rel='noreferrer'>
          <img className="mw-25"  src={JATE} alt="just Another Text Editor project" /></a>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <a className="img-fluid" href="https://github.com/Axelpanic/improved-guacamole" target="_blank" rel='noreferrer'>
            <img className="mw-25"  src={Scheduler} alt='Daily Scheduler project'/>
          </a>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <a className="img-fluid" href='https://github.com/Axelpanic/Weather-wherever' target='_blank' rel='noreferrer'>
            <img className="mw-25"  src={Weather} alt='Weather Dashboard project' />
          </a>
        </div>
      </div>
    </div>
    
</div>
  )
};