import React from 'react';

const getClassName = (isComing) => {
  const mainClass = "history__item"
  let additionalClass = isComing ?  "history__item-plus" : "history__item-minus"
  return `${mainClass} ${additionalClass}`
};

const HistoryItem = ({description, amount, add}) => {
  return (
    <li  className={getClassName(add)}>{description}
      <span className="history__money">{amount +' ₽'}</span>
      <button className="history__delete">x</button>
    </li>
  )
}
  
export default HistoryItem;