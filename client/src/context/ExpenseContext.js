import React, { createContext, useState } from 'react'
import axios from 'axios'

export const ExpenseContext = createContext()

export const ExpenseState = (props) => {
  const [state, dispatch] = useState({
    transactions: [],
    error: null,
    loading: true,
  })

  const getTransactions = async () => {
    const res = await axios.get('/expense')
    dispatch({
      ...state,
      // transactions: [...state.transactions, ...res.data],
      transactions: res.data,
      loading: false,
    })
  }

  const addTransaction = async (text, amount) => {
    const res = await axios.post('/expense', { text, amount })
    dispatch({
      ...state,
      transactions: [res.data, ...state.transactions],
    })
  }

  const deleteTransaction = async (id) => {
    const res = await axios.delete(`/expense/${id}`)
    dispatch({
      ...state,
      transactions: state.transactions.filter(
        (transaction) => transaction._id !== id
      ),
    })
  }

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        getTransactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  )
}
