import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink
                            activeClassName="menu_active"
                            exact
                            className="nav-link"
                            to="/Todolist"
                        >
                            Task-1  TodoList
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink
                            activeClassName="menu_active"
                            exact
                            className="nav-link"
                            to="/page"
                        >
                            Task-2  Pagination
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;
