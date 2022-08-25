import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expence) => (
        <ExpenseItem
          key={expence.id}
          title={expence.title}
          amount={expence.price}
          date={expence.formdate}
        />
      ))}
    </Card>
  );
};

export default Expenses;
