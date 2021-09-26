import React from 'react';
import NookPhone from './nookphone';
import { NavLink} from "react-router-dom";

const NookPhoneReminders = () => {
    return (
        <NookPhone view="reminder">
          <div class="app reminder" >
            <h1 class="app__title">Reminder</h1>
            <ul class="reminder__list"> 
              <li class="reminder__item reminder__item--blue">
                <div class="reminder__icon"><i class="fad fa-diagnoses"></i></div>
                <div class="reminder__text">Inspecter la scène de crime</div>
              </li>

              <li class="reminder__item reminder__item--orange">
                <div class="reminder__icon"><i class="fad fa-comments-alt"></i></div>
                <div class="reminder__text">Rendre visite à tous les suspects</div>
              </li>

              <li class="reminder__item reminder__item--pink">
                <div class="reminder__icon"><i class="fad fa-search"></i></div>
                <div class="reminder__text">Inspecter l'appartement de Jean Quete</div>
              </li>

              
              <li class="reminder__item reminder__item--green">
                <div class="reminder__icon"><i class="fad fa-gavel"></i></div>
                <div class="reminder__text">Découvrir qui à tué Jean Quete</div>
              </li>
            
            
            </ul>
          </div>

        </NookPhone>
    );
};

export default NookPhoneReminders;
