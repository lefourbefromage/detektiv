import React, { useState } from 'react';
import mailData from '../data/emails.json';




function NookMail() {
    const [emails, setEmails] = useState({
        content: (
            <div className="nookmail__content">
 
            </div>
        )
    }); 
    
    function handleClick(pos) {
        setEmails(
            {
                content: (
                    <div className="nookmail__content">
                        <div className="nookmail__mail-content__title">{mailData[pos].subject}</div>

                        {mailData.map((mailDetail, index)=> {
                            if(index === pos){
                                return (
                                    <div className="nookmail__mail-container" key={"mailcontainer" + index}>
                                        {mailDetail.timeline.map((mailDetail, index)=> {
                                            return (
                                                <div className="nookmail__mail-content"  key={"mailcontent" + index}>
                                                    <div className="nookmail__mail-content__expeditor">Expediteur: {mailDetail.expeditor} ({mailDetail.email})</div>
                                                    <div className="nookmail__mail-content__date">Date: {mailDetail.hour}</div>
                                                    <div className="nookmail__mail-content__content">{mailDetail.content}</div>
                                                </div>
                                            )}
                                        )}
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>           
                )
            }
        )
    }

    return (
        <div className="winnook__app nookmail animate__fadeInUpBig animate__animated">
            <h1 className="winnook__app__title"><i className="fas fa-envelope-open-text"></i>NookMail - 254 mails</h1>
            <div className="winnook__app__content nookmail__main">
                <div className="nookmail__sidebar">
                    <div className="nookmail__mail-list">
                        {mailData.map((mailDetail, index) => (
                            <button type="button" data-user="123" className="nookmail__mail-item" id={"mail-item-" + index} onClick={() => { handleClick(index) }} key={"mail-item-" + index}>
                                <div className="nookmail__mail-item__expeditor"><i className="far fa-user"></i>{mailDetail.timeline[0].expeditor}</div>
                                <div className="nookmail__mail-item__date">{mailDetail.timeline[0].hour}</div>
                                <div className="nookmail__mail-item__title">{mailDetail.subject}</div>
                                <div className="nookmail__mail-item__content">{mailDetail.timeline[0].content.slice(0, 52)}...</div>
                            </button>
                        ))}                 
                    </div>
                </div>

                
    
        
                {emails.content}
            </div>
        </div>
    )

    
    
    
}

export default NookMail
