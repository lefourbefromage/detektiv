import React from 'react';
import NookPhone from './nookphone';
import { NavLink} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NookPhoneHome = () => {
    return (
        <NookPhone view="home">
            <div class="nookphone__apps">

                <a href="https://www.twitch.tv/arcsinus_x" target="_blank"  rel="noreferrer" class="nookphone__app">
                    <LazyLoadImage class="nookphone__app__icon" src="./static/img/icons/twitch.png" alt="Twitch" />
                
                    <h2 class="nookphone__app__name">Touich</h2>
                </a>

                <NavLink class="nookphone__app nookphone__app--instanook" exact to="/instanook">
                <LazyLoadImage class="nookphone__app__icon" src="./static/img/icons/instanook.jpg" alt="Instanook" />
                    <h2 class="nookphone__app__name">Instanook</h2>
                </NavLink>
                <NavLink class="nookphone__app nookphone__app--notes" exact to="/suspect">
                <LazyLoadImage class="nookphone__app__icon" src="./static/img/icons/Notes.png" alt="Notes" />
                    <h2 class="nookphone__app__name">Notes</h2>
                </NavLink>
            </div>
         
        </NookPhone>
    );
};

export default NookPhoneHome;
