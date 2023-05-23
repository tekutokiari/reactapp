import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const year = props.date.toLocaleString('en-GB', { year: 'numeric' });
  const month = props.date.toLocaleString('en-GB', { month: '2-digit' });
  const day = props.date.toLocaleString('en-GB', { day: 'numeric' });
  if (props.date === 'N/A') {
    return <div className="expense-date">N/A</div>;
  }
  return (
    <div className="expense-date">
      {year}/{month}/{day}
    </div>
  );
}
