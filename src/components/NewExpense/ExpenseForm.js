import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredaAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredaAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredaAmount: event.target.value,
        // });
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(expenseData);
    }

    const expenseData = {
        title: enteredTitle,
        amount: enteredaAmount,
        date: new Date(enteredDate)
    };

   

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' value={enteredaAmount} min="0.01" max="10" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense_actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;