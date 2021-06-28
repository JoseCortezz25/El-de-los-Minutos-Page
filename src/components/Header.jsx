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
                        <Link to="/home">Home</Link>
                        <Link to="/videos">Videos</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/">Social</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
