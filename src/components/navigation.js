import React from 'react';
import { NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink to="/" activeClassName="nav-active">Login</NavLink>
            <NavLink exact to="/jqdiary" activeClassName="nav-active">Diary</NavLink>
        </div>
    );
};

export default Navigation;