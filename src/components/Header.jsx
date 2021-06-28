import React from 'react';
import { Link } from 'react-router-dom';
import logoMinutosNews from '../assets/static/logo-minutos-news.png';
import '../assets/styles/components/Header.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="container-header">
                    <nav>
                        <img src={ logoMinutosNews } alt="logo del canal" />
                    </nav>
                    <nav>
                        <Link to="/El-de-los-Minutos-Page/home">Home</Link>
                        <Link to="/El-de-los-Minutos-Page/videos">Videos</Link>
                        <Link to="/El-de-los-Minutos-Page/contact">Contact</Link>
                        <Link to="/El-de-los-Minutos-Page/">Social</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
