import './Expenses.css';
import ExpenseItem from "./Expenseltem";
import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props){
    const [selectedYear, setSelectedYear] = useState("2021");
    const filterChangeHandler = selectedYear =>{
        console.log("Expenses");
        console.log(selectedYear);
    }
    return (
    <div>
        <Card className="expenses">
            <ExpenseFilter selected = {selectedYear}
                           onChangeFiler = {filterChangeHandler}/>
            {props.items.map(expense => <ExpenseItem
                title={expense.title}
                date={expense.date}
                amount={expense.amount}/>)}
        </Card>
        </div>)
}

export default Expenses;