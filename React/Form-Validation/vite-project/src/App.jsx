import { useState } from 'react'
import './App.css'
import ExpenseForm from './Component/ExpenseForm'
import ExpenseTable from './Component/ExpenseTable'
import mydata from './data'

function App() {
  const [count, setCount] = useState(0)

  const [expense, setExpense] = useState(mydata);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable expense={expense} />
      </div>
    </main>
  )
}

export default App
