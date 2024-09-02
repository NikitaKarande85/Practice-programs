import logo from './logo.svg';
import './App.css';
import Timer from './Challenges/1_TimerCountDown/Timer';
import FileExplorer from './Challenges/2_FileExplorer/FileExplore';

function App() {
  return (
    <>
    <h1 className='Header'>Challenges</h1>
    {/* <Timer /> */}
    <FileExplorer />
    <h2 className='Header' style={{marginTop:"30px"}}>-Nikita Karande</h2>
    </>
  );
}

export default App;
