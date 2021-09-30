import React from 'react';
import NookPhone from './nookphone';

const NookPhoneWeather = () => {
    return (
        <NookPhone view="weather">
          <div className="weather-app">
            <div className="weather-app__current-day">
              <div className="weather-app__current-day__content">
                <div className="weather-app__location">
                  Grump-Île
                </div>
                <div className="weather-app__weather">
                    12°
                </div>              
              </div>
            </div>

            <div className="weather-app__week">
              <div className="weather-app__day">
                  <div className="weather__day">Lundi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Mardi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Mercredi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Jeudi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Vendredi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Samedi</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

              <div className="weather-app__day">
                  <div className="weather__day">Dimanche</div>
                  <div className="weather__details">12°<i className="fad fa-cloud-showers-heavy"></i></div>
              </div>

        
            </div>
          </div>
          
        </NookPhone>
    );
};

export default NookPhoneWeather;
