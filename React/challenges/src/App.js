import logo from './logo.svg';
import './App.css';
import Timer from './Challenges/1_TimerCountDown/Timer';
import FileExplorer from './Challenges/2_FileExplorer/FileExplore';
import Pagination from './Challenges/3_Pagination/pagination';
import FAQ from './Challenges/4_FAQ/FAQ';

function App() {
  return (
    <>
    <h1 className='Header'>Challenges</h1>
    {/* <Timer /> */}
    {/* <FileExplorer /> */}
    {/* <Pagination /> */}
    <FAQ />
    <h2 className='Header' style={{marginTop:"30px"}}>-Nikita Karande</h2>
    </>
  );
}

export default App;
