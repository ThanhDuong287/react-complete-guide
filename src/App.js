import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: "m1", title: 'Mercedes Benz E Class 300', amount: 294.66, date: new Date(2022, 7, 11) },
    { id: "m2", title: 'Mercedes Benz E Class 300', amount: 294.66, date: new Date(2022, 7, 11) },
    { id: "m3", title: 'Mercedes Benz E Class 300', amount: 294.66, date: new Date(2022, 7, 11) },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>

    </div>
  );
}

export default App;
