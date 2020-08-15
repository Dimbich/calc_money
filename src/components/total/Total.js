import React from 'react';

const getTotal = (transactions) => {
    let income = 0
    let expense = 0
    let total = 0

    if (transactions.length) {
      income = transactions.reduce((sum, item) =>  sum + (item.add ? +item.amount : 0), 0)
      expense = transactions.reduce((sum, item) => sum + (item.add ? 0 : +item.amount), 0)
      total = income - expense
    }

    return {income, expense, total}
  }

const Total = ({transactions}) => {
  const {income, expense, total} = getTotal(transactions)
  return (
  <section className="total">
    <header className="total__header">
      <h3>Баланс</h3>
      <p className="total__balance">
        {` ${total} ₽`}
      </p>
    </header>
    <div className="total__main">
      <div className="total__main-item total__income">
        <h4>Доходы</h4>
          <p className="total__money total__money-income">
            {`+ ${income} ₽`}
          </p>
       </div>
       <div className="total__main-item total__expenses">
          <h4>Расходы</h4>
          <p className="total__money total__money-expenses">
              {`- ${expense} ₽`}
          </p>
        </div>
      </div>
    </section>
  )
}


export default Total;


