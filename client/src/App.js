import React from 'react'
import './App.scss'
import Header from './components/Header'
import History from './components/History'
import InputForm from './components/InputForm'
import { ExpenseState } from './context/ExpenseContext'

const App = () => {
  return (
    <ExpenseState>
      <div className='container'>
        <div className='content'>
          <Header />
          <History />
          <InputForm />
        </div>
      </div>
    </ExpenseState>
  )
}

export default App
