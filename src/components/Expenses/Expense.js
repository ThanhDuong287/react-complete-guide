import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2019');
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)}
            </Card>
        </div>
    )
}
export default Expenses;