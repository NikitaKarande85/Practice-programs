import { useEffect, useState } from 'react';
import './Timer.css';
function Timer() {
    const [isStart, setStart] = useState(false);
    const [minutes, setminutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerId, setTimerId] = useState(0);

    const handleChange = (e) => {
        // console.log(e.target.value, e.target.id)
        const value = parseInt(e.target.value);
        const id = e.target.id;
        if (id == "seconds") {
            if (minutes > 1) {
                setSeconds(60)
            } {
                setSeconds(value)
            }

        } else if (id == "minutes") {

            setminutes(value)
        } else {
            setHours(value)
        }
    }

    const runTimer = (hours, minutes, seconds, n) => {
        if (seconds > 0) {
            setSeconds((val) => val - 1)
        } else if (seconds == 0 && minutes > 0) {
            setminutes((val) => val - 1)
            setSeconds(59)
        }
        else if (minutes == 0) {
            if (hours == 0 && minutes == 0 && seconds == 0) {
                setHours(0);
                setSeconds(0)
                setminutes(0)
                alert("Time finished");
                clearInterval(n);
                setStart(false)
            } else {
                setHours((val) => val - 1);
                setSeconds(59)
                setminutes(59)
            }
        }
    }

    useEffect(() => {
        let n;
        if (isStart) {
            n = setInterval(() => {
                runTimer(hours, minutes, seconds, n)
            }, 1000)
            console.log( n )
            setTimerId(n);
        }

        return () => {
            clearInterval(n)
        }
    }, [isStart, hours, minutes, seconds])

    function resetFunction() {
        setHours(0);
        setSeconds(0);
        setminutes(0);
        setStart(false);
        setIsPaused(false);
        clearInterval(timerId);
    }

    const funStartButton = () => {
        if (hours < 0 && minutes < 0 && seconds < 0) {
            alert("Please enter value")
        } else if (hours <= 0 && minutes <= 0 && seconds <= 0){
            alert("Please enter correct value")
        }else{
            setStart(true);
        }
    }

    const pause = () => {
        setIsPaused(true);
        clearInterval(timerId);
    }

    const resume = () => {
        setIsPaused(false);
        runTimer(hours, minutes, seconds);
    }

    return (
        <div className="bodystyle">
            <h1>Count Down Counter</h1>
            {
                !isStart && (
                    <>
                        <div className='inputContainer'>
                            <input className='hoursClass' type='number' id="hour" placeholder='HH' onChange={handleChange} min="0"></input>
                            <input className='minutesClass' id="minutes" type='number' placeholder='MM' onChange={handleChange} min="0"></input>
                            <input className='secondsClass' type='number' id="seconds" placeholder='SS' onChange={handleChange} min="0"></input>
                        </div>
                        <button className='startButton' onClick={funStartButton}>Start</button>
                    </>
                )
            }

            {
                isStart && (
                    <>
                        <div className='displayTime'>
                            <h1>{hours < 10 ? `0${hours}` : hours}:</h1>
                            <h1>{minutes < 10 ? `0${minutes}` : minutes}:</h1>
                            <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        </div>
                        <div className='pauseAndReset'>
                            {
                                !isPaused ?
                                    <button className='pauseClass' onClick={pause}>Pause</button> :
                                    <button className='resumeClass' onClick={resume}>Resume</button>
                            }
                            <button className='resetClass' onClick={resetFunction}>Reset</button>
                        </div>
                    </>
                )
            }

        </div>
    )
}
export default Timer;
