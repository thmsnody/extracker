import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Header = () => {
  const { transactions } = useContext(ExpenseContext)

  const totals = transactions.map((transaction) => transaction.amount)
  const total = totals.reduce((a, b) => a + b, 0)
  const plus = totals.filter((total) => total > 0).reduce((a, b) => a + b, 0)
  const minus = totals.filter((total) => total < 0).reduce((a, b) => a + b, 0)

  return (
    <>
      <h1 className='title'>Expense Tracker</h1>
      <h2 className='sub-title'>YOUR BALANCE</h2>
      <h2 className='balance'>${total}</h2>
      <div className='summary'>
        <div className='devider'>
          <h3>INCOME</h3>
          <h3 className='income-balance'>${plus}</h3>
        </div>
        <div>
          <h3>EXPENSE</h3>
          <h3 className='expense-balance'>${minus}</h3>
        </div>
      </div>
    </>
  )
}

export default Header
