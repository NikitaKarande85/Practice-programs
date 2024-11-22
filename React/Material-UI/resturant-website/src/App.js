import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { NoPageFound } from './Pages/NoPageFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='*' element={<NoPageFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
