import React from 'react';
import NookPhone from './nookphone';
import { NavLink} from "react-router-dom";

const NookPhoneHome = () => {
    return (
        <NookPhone view="home">
          Page d'acceuil
        </NookPhone>
    );
};

export default NookPhoneHome;
