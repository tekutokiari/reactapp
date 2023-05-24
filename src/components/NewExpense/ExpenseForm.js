import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formHandler}>
      <div class="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            onChange={priceHandler}
            value={enteredPrice}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            onChange={dateHandler}
            value={enteredDate}
            min="2019-01-01"
            max="2023-05-23"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
