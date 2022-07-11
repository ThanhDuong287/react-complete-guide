import './ExpenseItem.css'
function ExpenseItem(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
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
                        <p>
                            <div>{year} </div>
                            <div>{month} </div>
                            <div>{day} </div>
                        </p>
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