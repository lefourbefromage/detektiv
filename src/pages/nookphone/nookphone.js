import React from 'react';
import Clock from '../../components/time.js';
import {NavLink} from "react-router-dom";

const NookPhone = (props) => {
    return (
        <div className={'main-nookphone main-nookphone--' + props.view}>
            <div class="nookphone">
                <div class="nookphone__content">
                    <div class="nookphone__header">
                        <div class="nookphone__icons"><i class="fad fa-signal-alt-3"></i></div>
                        <div class="nookphone__time" id="time"><Clock/></div>
                        <div class="nookphone__icons"><i class="fad fa-battery-bolt"></i></div>
                    </div>

                    <div class="nookphone__body">
                        <div class="nookphone__body__content">
                            {props.children}
                        </div>
                        
                    </div>
                    <div class="nookphone__footer">            
                        <NavLink exact to="/" class="nookphone__footer__link" activeClassName="nav-nookphone__footer__link  nav-nookphone__footer__link--active">
                            <i class="fal fa-home"></i>
                        </NavLink>
                    </div>
                </div>
            </div>       
        </div>
    );
};

export default NookPhone;

