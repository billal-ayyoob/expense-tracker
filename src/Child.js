import React, { useContext, useState } from 'react';
import {TransactionsContext} from './transactionsContext';

function Child() {
    let { transactions, AddTransaction } = useContext(TransactionsContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    
    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) === 0){
            return false;
        }
        AddTransaction({
            amount: Number(newAmount),
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

            <div className="balance">
                <h4>Current Balance</h4>
                <h1>${getIncome() + getExpense()}</h1>
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

            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h2>Transaction History</h2>
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