import React, { useContext, useState } from 'react';
import {TransactionsContext} from './transactionsContext';

function Child() {
    let { transactions, AddTransaction, DelTransaction } = useContext(TransactionsContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    
    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) === 0){
            return false;
        }
        AddTransaction({
            id: Math.floor(Math.random()*1000000000),
            amount: +newAmount,
            desc: newDesc
        })

        setDesc('');
        setAmount(0);
    }

    const getIncome = () =>{
        let income = 0;
        for(var i=0; i < transactions.length; i++){
            if(transactions[i].amount > 0)
            income += transactions[i].amount;
        }
        return income;
    }

    const getExpense = () =>{
        let expense = 0;
        for(var i=0; i < transactions.length; i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount;
        }
        return expense;
    }

    return(
        <div className="container">
            <h1 className="text-center">ET (Expense Tracker)</h1>

            <div className="text-center">
                <h3 className="reduce-space">Current Balance</h3>
                <h1 className="reduce-space">${getIncome() + getExpense()}</h1>
            </div>
        
            <div className="inc-exp-container">
                <div>
                    <h2>Income</h2>
                    <p className="money plus">${getIncome()}</p>
                </div>
                <div>
                    <h2>Expense</h2>
                    <p className="money minus">${getExpense()}</p>
                </div>
            </div>

            <div>
                <h3>Transaction History</h3>
                <hr />
                <ul className="transaction-list">
                    {transactions.map((transaction) => {
                        return (
                            <li>
                                {transaction.desc}
                                <span>${transaction.amount}</span>
                                <button class="delete-btn" type="button" onClick={() => DelTransaction(transaction.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <h2>Add New Transaction</h2>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Desciption <br />
                    <input type="text"
                     value={newDesc}
                     placeholder="Enter Description"
                     onChange={(ev)=>setDesc(ev.target.value)} 
                     required/>
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"
                     value={newAmount}
                     placeholder="Enter Amount"
                     onChange={(ev)=>setAmount(ev.target.value)} 
                     required/>
                </label>
                <br />
                <input className="btn" type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}
export default Child;

