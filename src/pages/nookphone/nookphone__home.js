import React from 'react';
import NookPhone from './nookphone';
import { NavLink} from "react-router-dom";

const NookPhoneHome = () => {
    return (
        <NookPhone view="home">
            <div class="nookphone__apps">

                <a href="https://www.twitch.tv/arcsinus_x" target="_blank"  rel="noreferrer" class="nookphone__app">
                    <img class="nookphone__app__icon" src="./static/img/icons/twitch.png" alt="Instanook"></img>
                    <h2 class="nookphone__app__name">Touich</h2>
                </a>

                <NavLink class="nookphone__app nookphone__app--instanook" exact to="/instanook">
                    <img class="nookphone__app__icon" src="./static/img/icons/instanook.jpg" alt="Instanook"></img>
                    <h2 class="nookphone__app__name">Instanook</h2>
                </NavLink>
                <NavLink class="nookphone__app nookphone__app--notes" exact to="/suspect">
                    <img class="nookphone__app__icon" src="./static/img/icons/Notes.png" alt="Instanook"></img>
                    <h2 class="nookphone__app__name">Notes</h2>
                </NavLink>
            </div>
         
        </NookPhone>
    );
};

export default NookPhoneHome;
