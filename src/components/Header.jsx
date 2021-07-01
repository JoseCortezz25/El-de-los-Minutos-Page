import React from 'react';
import { Link } from 'react-router-dom';
import logoMinutosNews from '../assets/static/logo-minutos-news.png';
import { namesHeader } from '../utils/namesHeader';
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

                        { namesHeader.map((name) => {
                            return (
                                <Link to={`/El-de-los-Minutos-Page/${name.path}`}>{name.name}</Link>
                            )
                        })}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
