import React from 'react';
import HTML from '../../assets/images/Icons/html-5-96.png';
import CSS from '../../assets/images/Icons/css3-96.png';
import JS from '../../assets/images/Icons/javascript-96.png';
import Bootstrap from '../../assets/images/Icons/bootstrap-96.png';
import mySQL from '../../assets/images/Icons/mysql.png';

export default function Skills() {
  return (
    <div className='content'>
      <h3>Skills!</h3>
      <div className='cardish'>
        <div className='row'>
          <div className='col'>
            <img src={HTML} alt='HTML5' />
            <img src={CSS} alt='CSS3' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src={JS} alt='JavaScript' />
            <img src={Bootstrap} alt='Bootstrap' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img src={mySQL} alt='MySQL' />
          </div>
        </div>
      </div>
    </div>
      )
};