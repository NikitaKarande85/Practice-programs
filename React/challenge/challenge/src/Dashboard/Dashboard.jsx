import React from 'react';
import './Dashboard.css';
import line31 from '../img/Rectangle 31.svg';
import deleteicon from '../img/Group 79.svg';
import edit from '../img/Layer_1.svg';
import view from '../img/Group 60.svg';
import line33 from '../img/Rectangle 31 (1).svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <div className='addNew'>
          <div className='title'>Meetings</div>
          <button className='addNewbtn'>+ Add New</button>
        </div>

        <div className='box-main'>
          <div className='title'>Upcoming</div>
          <div className='box'>

            <span>
              <img src={line31} />
            </span>
            <div>
              <div className='box-items'>
                <div>
                  <div className='upcomingTitle'>Title</div>
                  <div className='subupcomingTitle'>Travel Brief</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Date</div>
                  <div className='subupcomingTitle'>7 Feb 2025</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Time</div>
                  <div className='subupcomingTitle'>10:30 AM</div>
                </div>
              </div>
              <hr></hr>

              <div className='allicons'>
                <div>
                  <img src={view} ></img><span>View</span>
                </div>
                <div>
                  <img src={edit}></img><span>Edit</span>
                </div>
                <div>
                  <img src={deleteicon}></img><span>Delete</span>
                </div>
              </div>

            </div>


          </div>

          <div className='box'>
            <span>
              <img src={line33} />
            </span>
            <div>
              <div className='box-items'>
                <div>
                  <div className='upcomingTitle'>Title</div>
                  <div className='subupcomingTitle'>Travel Brief</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Date</div>
                  <div className='subupcomingTitle'>7 Feb 2025</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Time</div>
                  <div className='subupcomingTitle'>10:30 AM</div>
                </div>
              </div>
              <hr></hr>

              <div className='allicons'>
                <div>
                  <img src={view} ></img><span>View</span>
                </div>
                <div>
                  <img src={edit}></img><span>Edit</span>
                </div>
                <div>
                  <img src={deleteicon}></img><span>Delete</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <button className='addNewbtn viewmore'><Link to="/view">View More</Link></button>

        <div className='box-main'>
          <div className='title'>Recurring</div>
          <div className='box'>
            <span>
              <img src={line33} />
            </span>
            <div>
              <div className='box-items'>
                <div>
                  <div className='upcomingTitle'>Title</div>
                  <div className='subupcomingTitle'>Travel Brief</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Date</div>
                  <div className='subupcomingTitle'>7 Feb 2025</div>
                </div>

                <div>
                  <div className='upcomingTitle'>Time</div>
                  <div className='subupcomingTitle'>10:30 AM</div>
                </div>
              </div>
              <hr></hr>

              <div className='allicons'>
                <div>
                  <img src={view} ></img><span>View</span>
                </div>
                <div>
                  <img src={edit}></img><span>Edit</span>
                </div>
                <div>
                  <img src={deleteicon}></img><span>Delete</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button className='addNewbtn viewmore'>View More</button>
      </div>
  );
};

export default Dashboard;
