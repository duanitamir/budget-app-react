import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";
import React from "react";


export const Header = ({startLogout}) =>
    (<header>
        <h1>Budget App</h1>
        <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Get Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
