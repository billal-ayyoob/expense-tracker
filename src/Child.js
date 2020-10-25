import React from 'react';

const Child = () =>{
    return(
        <div className="container">
            <h1>ET (Expense Tracker)</h1>

            <h3>Your Balance <br /> $4000 </h3>
        
            <div className="inc-exp-container">
                <h3>Income <br/> $1500</h3>
                <h3>Expense <br /> $500</h3>
            </div>

            <h2>Transaction History</h2>
            <hr />
            <div>
                <span>Cash</span>
                <span>$600</span>
            </div>

            <h2>Add New Transaction</h2>
            <hr />
        </div>
    );
}
export default Child;