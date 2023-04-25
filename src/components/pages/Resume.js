import React from 'react';
import Style from "../../assets/style/resume.css";

export default function Resume() {
  return (
    <div className='content'>
      <h2>Resume!</h2>
      <div className='cards'>
        <p className='jobinfo'> Delta Force Pi, LLC</p>
        <p className='jobinfo'> Gladstone, Michigan</p>
        <p className='jobtime'>November 2020 - Present</p>
        <p> Site Supervisor of security</p>
        <p> My job is to manage a team of 20 people and client satifaction! This security work entails montoring the site, answering phones, weekly meetings with the client, monthly virtual meetings with my own employer, CCTV camera monitoring, and on foot patrols. I also manage company assets on-site, such as equipment and uniforms.</p>
      </div>
      <div className='cards'>
        <p className='jobinfo'>Thillens Cagistics</p>
        <p className='jobinfo'>Madison, Wi</p>
        <p className='jobtime'>August 2019 to September 2020</p>
        <p> Route Manager</p>
        <p> My job was to manage a team of two, make sure we delivered to every stop, and balance out large amounts of cash at the end of our day. On average, we would make 20 stops at different locations all over Wisconsin within a time window of 7am to 4pm!</p>
      </div>
      <div className='cards'>
        <p className='jobinfo'>Wilderness Resort</p>
        <p className='jobinfo'>Wisconsin Dells, WI</p>
        <p className='jobtime'>March 2017 to August 2019</p>
        <p> Security Supervisor of J-1 Housing</p>
        <p> My job was to monitor, control access, and assist the on-site employees in their on-site housing. These employees were typically hired on a J-1 visa, otherwise known as temporary summer help!</p>
      </div>
    </div>
  );
}
