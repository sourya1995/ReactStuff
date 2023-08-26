import './ExpenseItem.css';

function ExpenseItem(){
    return (
       <div>
            <div className="expense-item">Date</div>
            <div className="expense-item__description">
                <h2>Title</h2>
                <div className="expense-item__price">Amount</div>
            </div>
       </div>
    );
}

export default ExpenseItem;