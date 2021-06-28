import React from 'react';
import '../assets/styles/components/Title.css';

const Title = ({ title, description }) => (
    <>
        <div className="container-title">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    </>
);

export default Title;
