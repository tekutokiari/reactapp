import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.toLocaleString('en-GB', { year: 'numeric' });
  const month = props.date.toLocaleString('en-GB', { month: 'long' });
  const day = props.date.toLocaleString('en-GB', { day: 'numeric' });
  if (props.date === 'N/A') {
    return <div className="expense-date">N/A</div>;
  }
  return (
    <div className="expense-date">
      {year}/{month}/{day}
    </div>
  );
};

export default ExpenseDate;
