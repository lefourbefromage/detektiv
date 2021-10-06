import React from 'react';
import NookPhone from './nookphone';

import ReactPlayer from 'react-player'

const NookPhoneStreetVideo = () => {
    return (
        <NookPhone view="video">
          <ReactPlayer className="nookphone__video" url='../../static/video/street.mp4' muted="true" playing="true" loop="true"/>
        </NookPhone>
    );
};

export default NookPhoneStreetVideo;
