import React, { Component } from 'react';

class Operations extends Component {
  state = {
    description :'',
    amount:''
  }

  addAmount = e => {
    this.setState({amount: e.target.value}) 
  }

  addDescription = e => {
    this.setState({description: e.target.value}) 
  }

  clearState = () => {
    this.setState({description: '', amount: ''})
  }

  handlerClickButton = (isIncome) => {
    const {state:{description, amount}, props:{addTransaction}, clearState} = this
    addTransaction(description, amount, isIncome)
    clearState()
  }

  render() {
    const {addDescription, addAmount, handlerClickButton} = this
    return(
      <section className="operation">
        <h3>Новая операция</h3>
        <form id="form">
            <label>
                <input 
                  type="text"
                  className="operation__fields operation__name" 
                  placeholder="Наименование операции"
                  onChange = {addDescription}
                  value = {this.state.description}
                />
            </label>
            <label>
                <input 
                  type="number"
                  className="operation__fields operation__amount"
                  placeholder="Введите сумму"
                  onChange = {addAmount}
                  value = {this.state.amount}
                />
            </label>
            <div className="operation__btns">
                <button 
                  onClick = {() => {handlerClickButton(false)}}
                  type="button" 
                  className="operation__btn operation__btn-subtract"
                >РАСХОД</button>
                <button
                  onClick = {() => {handlerClickButton(true)}}
                  type="button"
                  className="operation__btn operation__btn-add"
                >ДОХОД</button>
            </div>
      
        </form>
      </section>  
    )
  }
} 

export default Operations;