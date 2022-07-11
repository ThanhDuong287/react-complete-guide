import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expense';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: "m1", title: 'Mercedes Benz E Class 300', amount: 402.23, date: new Date(2022, 7, 11) },
    { id: "m2", title: 'Mercedes Benz C Class 200 Exclusive', amount: 294.66, date: new Date(2022, 7, 11) },
    { id: "m3", title: 'Mercedes Benz S Class 450', amount: 1015.94, date: new Date(2022, 7, 11) },
  ];
  return (
    <div className="App">
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
