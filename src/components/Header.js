import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <p><NavLink to='/' activeClassName="is-active" exact={true}>Dasboard</NavLink></p>
        <p><NavLink to='/add' activeClassName="is-active">Create Expense</NavLink></p>
        <p><NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink></p>
        <p><NavLink to='/help' activeClassName="is-active">Help</NavLink></p>
    </div>
);

export default Header;