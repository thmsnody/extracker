import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const InputForm = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(ExpenseContext)

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction(text, parseInt(amount))
  }

  return (
    <div className='input-form'>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <label>
          Text
          <br />
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text'
          />
        </label>
        <label>
          Amount
          <br />
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount'
          />
        </label>
        <input className='btn' type='submit' value='Add transaction' />
      </form>
    </div>
  )
}

export default InputForm
