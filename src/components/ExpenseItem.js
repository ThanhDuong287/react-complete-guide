import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseDate = new Date(2022, 7, 11);
    const expenseTitle = 'Mercedes Benz E Class 300';
    const expenseAmount = 203.92;
    return (
        <div>
            <h2>{props.title}</h2>
            <div className='container'>
                <h4>Amount</h4>
                <h1 id="balance">{props.amount}</h1>

                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+$0.00</p>
                        <p>{props.date.toISOString()}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-$0.00</p>
                        <p>{props.date.toISOString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseItem;