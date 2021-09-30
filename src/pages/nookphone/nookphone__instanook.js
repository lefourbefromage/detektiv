import React from 'react';
import NookPhone from './nookphone';
import PostData from '../../data/instanook.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NookPhoneInstanook = () => {
    return (
        <NookPhone view="instanook">
          <div className="instanook__posts">
            {PostData.map((postDetail, index)=>{
            return (
              <div className="instanook__post" key={index}>
                <div className="instanook__post__header">
                  <div className="instanook__post__avatar" style={{ backgroundImage: `url(${postDetail.avatar})` }}></div>
                  <div className="instanook__post__title">
                    <div className="instanook__post__username">{postDetail.username}</div>
                    <div className="instanook__post__postdate">{postDetail.date} - {postDetail.hours}</div>
                  </div>
                </div>

                <div className="instanook__post__content">
                  <div className="instanook__post__text">
                    {postDetail.text}
                  </div>
                  
                  <div className="instanook__post__media">
                    <LazyLoadImage src={postDetail.media} effect="blur" />
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </NookPhone>
    );
};

export default NookPhoneInstanook;
