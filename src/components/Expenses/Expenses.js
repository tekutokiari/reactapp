import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [yearSelected, setNewYear] = useState('2023');
  const yearChangeHandler = (selectedYear) => {
    setNewYear(selectedYear);
  };

  const expenses = [
    {
      title: 'Car insurance',
      price: '231.33',
      date: new Date(2023, 4, 22),
    },
    {
      title: 'Toilet paper',
      price: '50',
      date: new Date(2023, 4, 24),
    },
    {
      title: 'placeholder',
      price: 'N/A',
      date: 'N/A',
    },
  ];
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onYearChange={yearChangeHandler}
        />
        <ExpenseItem
          title={expenses[0].title}
          price={expenses[0].price}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          price={expenses[1].price}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[expenses.length - 1].title}
          price={expenses[expenses.length - 1].price}
          date={expenses[expenses.length - 1].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
