import React from 'react';
import NookPhone from './nookphone';
import PostData from '../../data/instanook.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NookPhoneHome = () => {
    return (
        <NookPhone view="instanook">
          <div class="instanook__posts">
            {PostData.map((postDetail, index)=>{
            return (
              <div class="instanook__post">
                <div class="instanook__post__header">
                  <div class="instanook__post__avatar" style={{ backgroundImage: `url(${postDetail.avatar})` }}></div>
                  <div class="instanook__post__title">
                    <div class="instanook__post__username">{postDetail.username}</div>
                    <div class="instanook__post__postdate">{postDetail.date} - {postDetail.hours}</div>
                  </div>
                </div>

                <div class="instanook__post__content">
                  <div class="instanook__post__text">
                    {postDetail.text}
                  </div>


                  <div class="instanook__post__media">
                  <LazyLoadImage 
                  src={postDetail.media} effect="blur" />
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </NookPhone>
    );
};

export default NookPhoneHome;
