import React from 'react';

const getClassName = (isIncome) => {
  const mainClass = "history__item"
  let additionalClass = isIncome ?  "history__item-plus" : "history__item-minus"
  return `${mainClass} ${additionalClass}`
};

const HistoryItem = ({id, description, amount, isIncome, deleteTransaction, changeHistoryState}) => {
  return (
    <li  className={getClassName(isIncome)}>{description}
      <span className="history__money">{amount +' ₽'}</span>
      <button 
        onClick = {() =>{deleteTransaction(id)}} 
        className="history__delete">x
      </button>
    </li>
  )
}
  
export default HistoryItem;