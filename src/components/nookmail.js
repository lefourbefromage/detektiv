import React from 'react'
import mailData from '../data/emails.json';

function NookMail() {
    return (
        <div className="winnook__app nookmail animate__fadeInUpBig animate__animated">
            <h1 className="winnook__app__title"><i className="fas fa-envelope-open-text"></i>NookMail - 254 mails</h1>
            <div className="winnook__app__content nookmail__main">
                <div className="nookmail__sidebar">
                    <div className="nookmail__mail-list">
                        {mailData.map((mailDetail, index)=> {
                            return (
                                <div className="nookmail__mail-item" key={index}>
                                    <div className="nookmail__mail-item__expeditor"><i className="far fa-user"></i>{mailDetail.timeline[0].expeditor}</div>
                                    <div className="nookmail__mail-item__date">{mailDetail.timeline[0].hour}</div>
                                    <div className="nookmail__mail-item__title">{mailDetail.subject}</div>
                                    <div className="nookmail__mail-item__content">{mailDetail.timeline[0].content.slice(0, 52)}...</div>
                                </div>
                            )}
                        )}                    
                    </div>
                </div>
                <div className="nookmail__content">
                    <div className="nookmail__mail-content__title">On a un soucis...</div>
                    <div className="nookmail__mail-content">
                        <div className="nookmail__mail-content__expeditor">Expediteur: Tom Nook (tom-nook@acnh.com)</div>
                        <div className="nookmail__mail-content__date">Date: 05/09/2021 à 23h</div>
                        <div className="nookmail__mail-content__content">Ceci est un text</div>
                    </div>

                    <div className="nookmail__mail-content">
                        <div className="nookmail__mail-content__expeditor">Expediteur: Tom Nook (tom-nook@acnh.com)</div>
                        <div className="nookmail__mail-content__date">Date: 05/09/2021 à 23h</div>
                        <div className="nookmail__mail-content__content">Ceci est un text</div>
                    </div>

                    <div className="nookmail__mail-content">
                        <div className="nookmail__mail-content__expeditor">Expediteur: Tom Nook (tom-nook@acnh.com)</div>
                        <div className="nookmail__mail-content__date">Date: 05/09/2021 à 23h</div>
                        <div className="nookmail__mail-content__content">Ceci est un text</div>
                    </div>

                    <div className="nookmail__mail-content">
                        <div className="nookmail__mail-content__expeditor">Expediteur: Tom Nook (tom-nook@acnh.com)</div>
                        <div className="nookmail__mail-content__date">Date: 05/09/2021 à 23h</div>
                        <div className="nookmail__mail-content__content">Ceci est un text</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NookMail
