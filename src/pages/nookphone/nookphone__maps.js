import React from 'react';
import NookPhone from './nookphone';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const NookPhoneMaps = () => {
    return (
        <NookPhone view="maps">
          <LazyLoadImage className="nookphone__maps" src="./static/img/map.jpg" alt="Map" />
        </NookPhone>
    );
};

export default NookPhoneMaps;
