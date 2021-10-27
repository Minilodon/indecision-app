import React from 'react';
import  ReactDOM  from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'coffee', amount: 100}));
store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('gas'));
},3000)

const state = store.getState();
const visibleExpeneses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpeneses);

//Provider linka o armazenamento do redux com o resto dos componentes dentro dele
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
); 

ReactDOM.render(jsx, document.getElementById('app'));