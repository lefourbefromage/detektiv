import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function BlockNook() {
    return (
        <div className="winnook__app blocknook animate__fadeInUpBig animate__animated">
            <h1 className="winnook__app__title"><i className="fas fa-clipboard"></i>Journal de bord - BlocNook</h1>
            <div className="winnook__app__content">
                <h2>01 Septembre 2020</h2>
                <p>
                    Bien arrivé sur Grump Île. J'ai pu rencontrer Tom Nook qui semble gérer les choses ici.<br/>
                    Je dois rencontrer toutes les personnes ayant de récents impayés sur leur pret immobilier afin de connaitre les raisons et faire un rapport a Claude Money, le banquier de l'île.
                </p>

                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-left" alt="photo journal 01" src="./static/img/blocknook/block-nook01.jpg" effect="blur" />

                <p>
                    Apparement le dossier était géré par l'agent Ribbs. Mais après des semaines sans résultats, Tom Nook a préféré se séparer de lui pour me laisser gérer le dossier. <br/>
                    Je vais aller le rencontrer en premier pour récupérer le dossier qu'il a pu déjà monter.
                </p>

                <p>
                    Bon j'ai rencontré ce fameux Ribbs. Pas très aimable le bonhomme mais bon c'est logique vu que je prend son poste.
                    Il n'a pas voulu me donner son enquête donc bon je vais devoir recommencer de 0... J'espère ne pas le recroiser par ce que ça m'a vraiment mis mal a l'aise cette situation !
                </p>

                <h2>02 Septembre 2021</h2>
                
                <p>
                    Journée enfin terminé. Je me suis perdu plus d'une fois dans cette ville de m***e.<br/>
                    - Rendez-vous avec le pécheur : Capitaine Costaud ✅<br/>
                    - Raison des difficultés de payments: Fuite des poissons à cause des touristes qui viennent sur l'île.
                </p>

                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-right" alt="photo journal 02" src="./static/img/blocknook/block-nook02.jpeg" effect="blur" />

                <h2>03 Septembre 2021</h2>
                <p>
                    Troisième journée sur place. Il pleut tous le temps ici ou quoi ? Je n'avais pas prévu un temps si pourris...<br/>
                    - Rendez-vous avec le cuistot : Cyril Cognac ✅<br/>
                    - Raison des difficultés de payments: Retard à cause d'une erreur administrative causé par l'assistante Marie.
                </p>
                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-left" alt="photo journal 03a" src="./static/img/blocknook/block-nook03b.jpeg" effect="blur" />

                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-right" alt="photo journal 03a" src="./static/img/blocknook/block-nook03.jpeg" effect="blur" />
              
                <p>
                    J'ai profité du rendez-vous pour manger au "Bartaba". C'était franchement pas fou...<br/>
                    J'ai l'impression que peu de personnes apprécient Tom Nook ici.
                </p>

        
                <h2>04 Septembre 2021</h2>
                <p>
                    On approche de la fin des rendez-vous.<br/>
                    - Rendez-vous avec la chanteuse : Corinne Dion ✅<br/>
                    - Raison des difficultés de payments: Achat de nombreux accessoires pour le spectacle. (Des paires de chaussures...)
                </p>
                <p> 
                    Corinne est très charmante et me rappel un peu Lara 💕 dans sa jeunesse. Elle ma convié a venir voir son spectacle de cabaret mais je serais surement au lit quand ça commencera...💤💤💤 
                </p>    

                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-right" alt="photo journal 04" src="./static/img/blocknook/block-nook04.jpeg" effect="blur" />

                <h2>05 Septembre 2021</h2>

                <p>
                    Je vais faire court par ce que c'est très étrange.<br/>
                    J'ai pu faire mon rapport a Claude Money mais en allant pisser, je me suis perdu dans le manoir et suis tombé sur des choses pas nettes...<br/>
                    Des oeuvres. Il y en a beaucoup avec des notes et des sacs de clochettes ! Le soucis c'est que je n'étais pas sencé voir ça !
                </p>

                <LazyLoadImage  className="winnook__app__content__img winnook__app__content__img--rotate-left" alt="photo journal 05" src="./static/img/blocknook/block-nook05.jpg" effect="blur" />

                <p>
                    J'ai pretexté un autre rendez-vous pour me barrer et réfléchir à ce que je fais mais mon jeu d'acteur ma trahis et Claude a surement compris...<br/>
                    J'ai l'impression d'être suivis depuis que je suis partis. Je flippe a mort...<br/>
                    Bon je vais voir Tom Nook pour lui expliquer la situation et ensuite je prend l'avion pour prévenir les autorités du trafic...<br/>
                </p>                

            </div>
        </div>
    )
}

export default BlockNook
