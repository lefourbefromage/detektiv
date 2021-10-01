import React from 'react'
import Clock from '../../components/time';
import BlockNook from '../../components/blockNook';
import NookMail from '../../components/nookmail';


function LoggedSession({username, Logout}) {
    return (
        <div className="winnook">
            <div className="winnook__content">
                {(username === 'ClaudeMoney') ? (
                    <NookMail/>
                )
                : (username === 'JeanQuete') ? (
                    <BlockNook/>
                ) 
                : ""}
            </div>
            <div className="winnook__footer">
            <button type="button" className="winnook__logout" onClick={Logout}>Deconnexion</button>
                
                <div className="winnook__footer__right">
                    <div>{username}</div>
                    <span className="winnook__footer__separator"></span>
                    <Clock/>
                </div>
                
            </div>
            
        </div>
    )
}

export default LoggedSession
