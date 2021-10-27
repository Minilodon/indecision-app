import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
//connect retorna uma função
//o primeiro item de connect retorna um objeto com propriedades que o segundo item pode ter acesso como props
//o state do mapStateToProps faz com que os valores do armazenamento do redux seja lido
//toda vez que o valor do armazenamento do redux é atualizado, os componentes conectados são atualizados