import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    const collectExpenceForm =(newExpenseData)=>{
        const expenceNewObj = {
            // id: Math.random().toString(),
            ...newExpenseData
        }
        
        props.onNewExpance(expenceNewObj);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onCollectExpenseForm = {collectExpenceForm} />
        </div>
    );

}

export default NewExpense;