import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operations from './components/operations/Operations';

class App extends Component {
  state = {
    transactions: [],
    description: '',
    amount: ''    
  }

  addTransaction = add => {
    const transactions = [...this.state.transactions]
    const {description, amount} = this.state;
    transactions.push({
        id: `cmr${(+new Date).toString(16)}`,
        description,
        amount,
        add
    })

    this.setState(
      {
        transactions,
        description: '',
        amount: ''
      }
    );
  }

  addAmount = e => {
     this.setState({amount: e.target.value}, ()=> this.state) 
  }

  addDescription = e => {
    this.setState({description: e.target.value}) 
 }

  render() {
    const {addTransaction, addAmount, addDescription, state:{transactions, description, amount}} = this
    return (
      <>
        <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
        </header>
  
        <main>
            <div className="container">
                <Total/>
                <History transactions = {transactions}/>
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

export default App;
