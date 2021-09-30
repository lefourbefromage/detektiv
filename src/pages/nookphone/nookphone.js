import React from 'react';
import Clock from '../../components/time.js';
import {NavLink} from "react-router-dom";

const NookPhone = (props) => {
    return (
        <div className={'main-nookphone main-nookphone--' + props.view}>
            <div className="nookphone">
                <div className="nookphone__content">
                    <div className="nookphone__header">
                        <div className="nookphone__icons"><i className="fad fa-signal-alt-3"></i></div>
                        <div className="nookphone__time" id="time"><Clock/></div>
                        <div className="nookphone__icons"><i className="fad fa-battery-bolt"></i></div>
                    </div>

                    <div className="nookphone__body">
                        <div className="nookphone__body__content">
                            {props.children}
                        </div>
                        
                    </div>
                    <div className="nookphone__footer">            
                        <NavLink exact to="/" className="nookphone__footer__link" activeClassName="nav-nookphone__footer__link  nav-nookphone__footer__link--active">
                            <i className="fal fa-home"></i>
                        </NavLink>
                    </div>
                </div>
            </div>       


        </div>
    );
};

export default NookPhone;

