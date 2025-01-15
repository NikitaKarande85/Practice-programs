import logo from './logo.svg';
import './App.css';
import search from '../src/img/Group 2.svg'
import profile from './img/Union.svg';
import calender from './img/Group 130@2x.svg';
import mettingIcon from './img/Group 259.svg';
import line from './img/Line 2.svg'
import linered from './img/Line 3.svg'
import lineblue from './img/Line 4.svg';
import horizontalline from './img/Rectangle 27.svg';

function App() {
  return (
    <div className='main'>
      <div className='header'>
        <h1 className='logo'>LOGO</h1>

        <div class="search-container">
          <input type="text" />
          <button>
            <img src={search} alt="Search Icon" />
          </button>
        </div>
        <div className='content'>
          <span>Dashboard</span>
          <span>Pricing</span>
          <span>Features</span>
          <span>About</span>
          <img src={profile}></img>
        </div>
      </div>
      <h1 className='welcome'>Welcome</h1>

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
          
          <div class="date-container">
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
      
    </div>
  );
}

export default App;
