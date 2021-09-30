import React from 'react';
import NookPhone from './nookphone';

const NookPhoneReminders = () => {
    return (
        <NookPhone view="reminder">
          <div className="app reminder" >
            <h1 className="app__title">Reminder</h1>
            <ul className="reminder__list"> 
              <li className="reminder__item reminder__item--blue">
                <div className="reminder__icon"><i className="fad fa-diagnoses"></i></div>
                <div className="reminder__text">Inspecter la scène de crime</div>
              </li>

              <li className="reminder__item reminder__item--orange">
                <div className="reminder__icon"><i className="fad fa-comments-alt"></i></div>
                <div className="reminder__text">Rendre visite à tous les suspects</div>
              </li>

              <li className="reminder__item reminder__item--pink">
                <div className="reminder__icon"><i className="fad fa-search"></i></div>
                <div className="reminder__text">Inspecter l'appartement de Jean Quete</div>
              </li>

              
              <li className="reminder__item reminder__item--green">
                <div className="reminder__icon"><i className="fad fa-gavel"></i></div>
                <div className="reminder__text">Découvrir qui à tué Jean Quete</div>
              </li>
            </ul>
          </div>

        </NookPhone>
    );
};

export default NookPhoneReminders;
