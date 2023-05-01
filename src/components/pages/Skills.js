import React from 'react';
import Style from '../../assets/style/skills.css';
import HTML from '../../assets/images/html-5-96.png';
import CSS from '../../assets/images/css3-96.png';
import JS from '../../assets/images/javascript-96.png';
import Bootstrap from '../../assets/images/bootstrap-96.png';
import mySQL from '../../assets/images/mysql.png';
import mongodb from '../../assets/images/MongoDB_Logomark_SpringGreen.png';
import imgR from "../../assets/images/logo192.png";
import gQL from '../../assets/images/GraphQL Logo (Rhodamine).png';

export default function Skills() {
  return (
    <div className='content'>
      <h3>Skills!</h3>
      <div className='cardlike'>
        <div className='row'>
          <div className='col'>
            <p className='title'>HTML</p>
            <img src={HTML} alt='HTML5' />
            <p className='title'>CSS</p>
            <img src={CSS} alt='CSS3' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>JavaScript</p>
            <img src={JS} alt='JavaScript' />
            <p className='title'>Bootstrap</p>
            <img src={Bootstrap} alt='Bootstrap' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='title'>MySQL2</p>
            <img src={mySQL} alt='MySQL' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <p className='title'>MongoDB</p>
            <img className='img-fluid' src={mongodb} alt='mongoDB logo' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <p className='title'>React</p>
            <img className='img-fluid' src={imgR} alt='React Logo' />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <p className='title'>GraphQL</p>
            <img className='img-fluid' src={gQL} alt='GraphQL Logo' />
          </div>
        </div>
        </div>
        <div className='adding'>
          <p> Additional skills I have learned:</p>
          <p> MERN Stack, Express.JS, Node.js, .net Framework, jQuery, WebPack, API/REST, Sequelize,
            SDLC (software Developmnent life cycle), and AWS. </p>
        </div>
      </div>
  )
};