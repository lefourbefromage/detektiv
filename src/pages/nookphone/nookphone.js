import React from 'react';
import Clock from '../../components/time.js';
import Navigation from '../../components/navigation';

const NookPhone = (props) => {
    return (
        <div className={'main-nookphone main-nookphone--' + props.view}>
            <div class="nookphone">
                <div class="nookphone__content">
                    <div class="nookphone__header">
                        <div class="nookphone__signal"></div>
                        <div class="nookphone__time" id="time"><Clock/></div>
                        <div class="nookphone__gps"></div>
                    </div>

                    <div class="nookphone__body">
                        {props.children}
                    </div>

                    <Navigation/>
                </div>
            </div>       
        </div>
    );
};

export default NookPhone;

