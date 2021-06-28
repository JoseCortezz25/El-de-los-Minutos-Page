import React from 'react';
// import Message from '../components/Message';
import Videos from '../container/Videos';
import Networks from '../components/Networks';
import logoChannel from '../assets/static/logo-channel.jpeg'
import '../assets/styles/App.css';
import '../assets/styles/components/Home.css';


const Home = () => {
    return (
        <>
            <section className="container-home">
                <section className="describing-myself">
                    <div className="describing-myself__image">
                        <img src={ logoChannel } alt="logo del canal" />
                    </div>
                    <div className="describing-myself__info">
                        <h1>El de los Minutos</h1>
                        <p className="info-channel">
                            Canal dedicado al contenido de Freestyle o rap improvisado. Videos recopilatorios de las mejores rimas y momentos de las batallas de gallos.
                        </p>
                    </div>
                </section>
                
                <Networks />

                <Videos />

            </section>
        </>
        
    )
}

export default Home;
