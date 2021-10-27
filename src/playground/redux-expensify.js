import { createStore, combineReducers } from "redux";
import uuid from 'uuid'






store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50, createdAt: -1000}));

//store.dispatch(removeExpense({id : expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'sadasdsadas',
        description: 'Aluguel de janeiro',
        note: 'Esse aqui foi mais caro porque razões',
        amount: 123400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};

