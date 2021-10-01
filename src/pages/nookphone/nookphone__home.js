import React from 'react';
import NookPhone from './nookphone';
import { NavLink} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NookPhoneHome = () => {
    return (
        <NookPhone view="home">
            <div className="nookphone__apps">

                <a href="https://www.twitch.tv/arcsinus_x" target="_blank"  rel="noreferrer" className="nookphone__app">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/twitch.png" alt="Twitch" />
                    <h2 className="nookphone__app__name">Touich</h2>
                </a>

                <NavLink className="nookphone__app nookphone__app--instanook" exact to="/instanook">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/instanook.jpg" alt="Instanook" />
                    <h2 className="nookphone__app__name">Instanook</h2>
                </NavLink>

                <NavLink className="nookphone__app nookphone__app-message" exact to="/messages">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/Messages.png" alt="Messages" />
                    <h2 className="nookphone__app__name">Messages</h2>
                </NavLink>

                
                <NavLink className="nookphone__app nookphone__app-message" exact to="/weather">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/Weather.png" alt="Instanook" />
                    <h2 className="nookphone__app__name">Météo</h2>
                </NavLink>

                <NavLink className="nookphone__app nookphone__app--notes" exact to="/reminders">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/reminders.png" alt="Notes" />
                    <h2 className="nookphone__app__name">Reminders</h2>
                </NavLink>

                <NavLink className="nookphone__app nookphone__app--notes" exact to="/suspects">
                    <LazyLoadImage className="nookphone__app__icon" src="./static/img/icons/Contacts.png" alt="Notes" />
                    <h2 className="nookphone__app__name">Suspects</h2>
                </NavLink>
            </div>
        </NookPhone>
    );
};

export default NookPhoneHome;
