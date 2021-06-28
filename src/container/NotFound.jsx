import React from 'react';
import noPuedeSerImage from '../assets/static/no-puede-ser.jpg';
import '../assets/styles/components/NotFound.css';


export default function NotFound({ history }) {
    return (
        <>
            <div className="container-notfound">
                <h1>The page was not found :(</h1>
                <button className="btn-back" onClick={() => history.push("/home")}>Back to home</button>
                <div className="image-error">
                    <img src={ noPuedeSerImage } alt="no puede ser error 404" />
                </div>
            </div>
        </>
    )
}
