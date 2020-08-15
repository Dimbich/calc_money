import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operations from './components/operations/Operations';

class MyCalc extends Component {
  state = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
    description: '',
    amount: ''    
  }

  addTransaction = isIncome => {
    const transactions = [...this.state.transactions]
    const {description, amount} = this.state;
    transactions.push({
        id: `cmr${(+new Date).toString(16)}`,
        description,
        amount,
        isIncome
    })

    this.setState(
      {
        transactions,
        description: '',
        amount: ''
      }, this.saveToLocalStorage
    );
  }

  addAmount = e => {
     this.setState({amount: e.target.value}, ()=> this.state) 
  }

  addDescription = e => {
    this.setState({description: e.target.value}) 
 }

 saveToLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(this.state.transactions))
 }

 deleteTransaction = id => {
   this.setState(
     {transactions: this.state.transactions.filter(item => item.id != id)},
     this.saveToLocalStorage
   )
 }

  render() {
    const {addTransaction, addAmount, addDescription, deleteTransaction, state:{transactions, description, amount}} = this
    return (
      <>
        <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
        </header>
  
        <main>
            <div className="container">
                <Total transactions = {transactions}/>
                <History 
                  transactions = {transactions}
                  deleteTransaction = {deleteTransaction}
                />
                <Operations 
                  addTransaction = {addTransaction}
                  addAmount = {addAmount}
                  addDescription = {addDescription}
                  description = {description}
                  amount = {amount}
                />
            </div>
        </main>
      </>
    )
  }  
}

export default MyCalc;
