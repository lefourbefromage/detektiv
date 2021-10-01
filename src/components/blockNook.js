import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function BlockNook() {
    return (
        <div className="winnook__app blocknook animate__fadeInUpBig animate__animated">
            <h1 className="winnook__app__title"><i className="fas fa-clipboard"></i>Journal de bord - BlocNook</h1>
            <div className="winnook__app__content">
                <h2>Journal du 15 septembre 2021</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus viverra orci ut sagittis iaculis. 
                    Aenean sed felis ac dui varius rhoncus vitae sit amet arcu. 
                    Fusce hendrerit arcu auctor arcu sollicitudin varius. 
                    Pellentesque lobortis, mi in tristique elementum, magna lorem tincidunt tellus, a tempor sem urna sed massa. 
                    Curabitur cursus arcu ac cursus tristique. Curabitur metus sapien, laoreet vitae sollicitudin eu, ornare sed lectus.
                    Cras consequat sem quis fermentum ultrices. Fusce sit amet elementum dui.
                </p>

                <h2>Journal du 16 septembre 2021</h2>
                <p>
                    Suspendisse vitae felis at turpis lobortis pretium quis sed massa. 
                    Cras tortor nulla, lobortis bibendum est a, finibus congue sem. 
                    Vestibulum porttitor sapien at eros fermentum rutrum. 
                    In in venenatis massa. Praesent eget dolor iaculis, condimentum leo eget, aliquam tortor.
                    Nunc eu est vel eros semper suscipit.
                </p>

                <LazyLoadImage alt="photo journal 01" src="./static/img/posts/acnh01.jpg" effect="blur" />
            </div>
        </div>
    )
}

export default BlockNook
