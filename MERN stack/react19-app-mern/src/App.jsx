import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudent from './Pages/AddStudent'
import ShowTable from './Pages/ShowTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddStudent /> 
     <br></br>
     <ShowTable />  
    </>
  )
}

export default App
