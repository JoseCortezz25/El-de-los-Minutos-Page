import React from 'react';
import { truncate } from '../utils/helpers';
import '../assets/styles/components/PostCard.css';

const PostCard = ({id, title, body, image}) => {

    return (
        <div className="post-card">
            <div className="post-card-header">
                <div className="post-card-image">
                    <img src={image} alt={title} />
                </div>
            </div>
            <section className="post-card-description">
                <div className="post-card-tags">
                    <div><span className="">{id} - RedBull</span><span className="">, </span><span className="">Aczino</span><span className="">, </span><span className="">Eventos</span></div>
                    </div>
                <h2 className="post-card-title">
                    {title}
                </h2>
                <div className="post-card-excerpt">
                    {truncate(body, 120)}
                </div>
            </section>
        </div>
    )
}

export default PostCard;
