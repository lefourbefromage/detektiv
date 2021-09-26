import React from 'react';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <div className="nookphone__footer">            
            <NavLink exact to="/" class="nookphone__footer__link" activeClassName="nav-nookphone__footer__link  nav-nookphone__footer__link--active">Accueil</NavLink>
            <NavLink exact to="/suspect" class="nookphone__footer__link" activeClassName="nav-nookphone__footer__link  nav-nookphone__footer__link--active">Suspect</NavLink>
            <NavLink exact to="/instanook" class="nookphone__footer__link" activeClassName="nav-nookphone__footer__link nav-nookphone__footer__link--active">Instanook</NavLink>
        </div>

    );
};

export default Navigation;