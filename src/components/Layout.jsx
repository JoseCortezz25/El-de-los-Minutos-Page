import React from 'react';
import Header from './Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Layout.css'

const Layout = ({children}) => {
    return (
        // <div className="effect-blur">
            <div className="container-layout">
                <Header />            
                {children}
                <Footer />
            </div>
        /* </div> */
    )
}

export default Layout
