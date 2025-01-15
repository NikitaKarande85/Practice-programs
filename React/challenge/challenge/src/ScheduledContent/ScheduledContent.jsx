import React from 'react';
import './ScheduledContent.css';
import calender from '../img/Group 130@2x.svg';
import mettingIcon from '../img/Group 259.svg';
import line from '../img/Line 2.svg'
import linered from '../img/Line 3.svg'
import lineblue from '../img/Line 4.svg';
import horizontalline from '../img/Rectangle 27.svg';

const ScheduledContent = () => {
  return (
    <>
      <div className='Scheduled-contain'>
        <div className='content-schedule'>
          <div className='logos'>
            <div className='calender'>
              <img src={calender}></img>
              <p>Upcoming</p>
            </div>
            <div className='meetingiconbackground'>
              <img src={mettingIcon}></img>
              <img className='horizontal' src={horizontalline}></img>
              <p>Schedule a<br /> Meeting</p>
            </div>
          </div>
          <div>
            <img src={line} />
          </div>
          
          <div className="date-container">
            <span className="day">Today</span>
            <div className='date'>29 November</div>
          </div>

          <div className='lines'>
            <img src={linered}  />
          </div>
          <div className='date'>
            <div className="event-title">New Year Special</div>
            <div className="event-location">Shoot</div>
          </div>

          <div className='lines' >
            <img src={lineblue} />
          </div>
          <div className='date'>
            <div className="event-time">10 AM</div>
            <div className="event-time">Bandra</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledContent;
