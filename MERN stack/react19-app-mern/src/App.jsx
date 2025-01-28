import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudent from './Pages/AddStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddStudent /> 
    </>
  )
}

export default App
