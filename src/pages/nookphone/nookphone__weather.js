import React from 'react';
import NookPhone from './nookphone';

const NookPhoneWeather = () => {
    return (
        <NookPhone view="weather">
          <div class="weather-app">
            <div class="weather-app__current-day">
              <div class="weather-app__current-day__content">
                <div class="weather-app__location">
                  Grump-Île
                </div>
                <div class="weather-app__weather">
                    12°
                </div>              
              </div>
            </div>

            <div class="weather-app__week">
              <div class="weather-app__day">
                  <div class="weather__day">Lundi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Mardi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Mercredi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Jeudi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Vendredi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Samedi</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div class="weather-app__day">
                  <div class="weather__day">Dimanche</div>
                  <div class="weather__details">12°<i class="fad fa-cloud-showers-heavy"></i></div>
              </div>

        
            </div>
          </div>
          
        </NookPhone>
    );
};

export default NookPhoneWeather;
