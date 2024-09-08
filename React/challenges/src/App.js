import logo from './logo.svg';
import './App.css';
import Timer from './Challenges/1_TimerCountDown/Timer';
import FileExplorer from './Challenges/2_FileExplorer/FileExplore';
import FAQ from './Challenges/4_FAQ/FAQ';
import PaginationFrotendHandled from './Challenges/3_Pagination/PaginationFrotendHandled';
import PaginationBackendHandled from './Challenges/3_Pagination/PaginationBackendHandled';
import EMI from './Challenges/5_EMI_Calculate/EMI';
import EMIWithRenge from './Challenges/6_EMI_Calculate_With_RengeInput/EMIWithRenge';

function App() {
  return (
    <>
    <h1 className='Header'>Challenges</h1>
    {/* <Timer /> */}
    {/* <FileExplorer /> */}
    {/* <PaginationFrotendHandled /> */}
    {/* <PaginationBackendHandled  /> */}
    {/* <FAQ /> */}
    {/* <EMI /> */}
    <EMIWithRenge />
    <h2 className='Header' style={{marginTop:"30px"}}>-Nikita Karande</h2>
    </>
  );
}

export default App;
