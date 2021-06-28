import React from 'react';
import tiktokIcon from '../assets/static/icons8-tiktok.svg';
import youtubeIcon from '../assets/static/icons8-youtube-play-button-black.svg';
import twitterIcon from '../assets/static/icons8-twitter.svg';
import { YOUTUBE_URL, TWITTER_URL } from '../utils/constant';
import '../assets/styles/components/Footer.css';

function Footer() {

    const getAgeNow = () => {
        const date = new Date();
        const age = date.getFullYear();
        return age;
    }

    return (
        <footer>
            <div className="footer__container">
                <div className="footer__nav">
                    <p>El de los Minutos | Todos los izquierdos reservados © {getAgeNow()}. <strong>BETA</strong></p>
                </div>
                <div className="footer__nav">
                    <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={tiktokIcon} alt="icono de tiktok" />
                    </a>
                    <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={youtubeIcon} alt="" />
                    </a>
                    <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={twitterIcon} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
