import React, { useContext, useEffect } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const History = () => {
  const { transactions, getTransactions, deleteTransaction } = useContext(
    ExpenseContext
  )

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='history'>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className={`list ${transaction.amount >= 0 ? 'true' : 'false'}`}
          >
            <button onClick={() => deleteTransaction(transaction._id)}>
              X
            </button>
            {transaction.text}
            <span>{transaction.amount} $</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
