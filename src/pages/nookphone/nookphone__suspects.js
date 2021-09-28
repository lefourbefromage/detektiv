import React from 'react';
import NookPhone from './nookphone';
import userData from '../../data/suspects.json';

const NookPhoneInstanook = () => {
    return (
        <NookPhone view="suspects app">
          <h1 class="app__title">Suspects</h1>
          <div class="suspects__list">
            {userData.map((userDetail, index)=>{
            return (
              <div class="suspects__item">
                  <div class="suspects__avatar">
                      <img src={userDetail.avatar} alt={userDetail.username}/>
                  </div>
                  <div class="suspects__informations">
                      <h2 class="suspects__username">{userDetail.username}</h2>
                      <p class="suspects__job">{userDetail.job}</p>
                      <p class="suspects__context">{userDetail.text}</p>   
                  </div>
              </div>
            )
          })}
          </div>
        </NookPhone>
    );
};

export default NookPhoneInstanook;
