import React from 'react';
import NookPhone from './nookphone';
import userData from '../../data/suspects.json';

const NookPhoneInstanook = () => {
    return (
        <NookPhone view="suspects app">
          <h1 className="app__title">Suspects</h1>
          <div className="suspects__list">
            {userData.map((userDetail, index)=>{
            return (
              <div className="suspects__item" key={index}>
                  <div className="suspects__avatar">
                      <img src={userDetail.avatar} alt={userDetail.username}/>
                  </div>
                  <div className="suspects__informations">
                      <h2 className="suspects__username">{userDetail.username}</h2>
                      <p className="suspects__job">{userDetail.job}</p>
                      <p className="suspects__context">{userDetail.text}</p>   
                      <p className="suspects__context">Interets: <strong>{userDetail.interest}</strong></p>   
                  </div>
              </div>
            )
          })}
          </div>
        </NookPhone>
    );
};

export default NookPhoneInstanook;
