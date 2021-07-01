import React from "react";
import tiktokIcon from '../assets/static/icons8-tiktok.svg';
import youtubeIcon from '../assets/static/icons8-youtube-play-button.svg';
import { YOUTUBE_URL, TWITTER_URL } from '../utils/constant';
import "../assets/styles/components/Networks.css";

function Networks() {
    return (
        <section className="container-networks">
            <div className="item__card">
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                    <h2>
                        <span>Videos cada semana</span>
                        @eldelosminutos
                    </h2>
                </a>
                <p>🎥😎🔥</p>
            </div>
            
            <div className="network__card">
                <figure>
                    <img src={youtubeIcon} alt="Youtube" />
                </figure>
                <div className="network__card-title">
                    <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                        <h2>
                            <span>Youtube</span>El de los Minutos
                        </h2>
                    </a>
                    <p>🗓️ Jueves 3PM</p>
                </div>

            </div>

            <div className="network__card">
                <figure>
                    <img src={tiktokIcon} alt="tiktok" />
                </figure>
                <div className="network__card-title">
                    <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                        <h2>
                            <span>Tiktok</span>El de los Minutos
                        </h2>
                    </a>
                    <p>🗓️ Martes 4pm</p>
                </div>

            </div>
            
            {/* <div className="network__card">
                <figure>
                    <img src={tiktokIcon} alt="tiktok" />
                </figure>
                <div className="network__card-title">
                    <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                        <h2>
                            <span>Tiktok</span>El de los Minutos
                        </h2>
                    </a>
                    <p>🗓️ Sabado 5PM</p>
                </div>
            </div> */}

        </section>
    );
}

export default Networks;
