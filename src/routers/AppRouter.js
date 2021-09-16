import React from 'react';
import { BrowserRouter as Routes, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <Routes>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/add" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Routes>
);

export default AppRouter;
