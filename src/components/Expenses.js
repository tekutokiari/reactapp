import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

const Expenses = (props) => {
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
    <Card className="expenses">
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
  );
};

export default Expenses;
