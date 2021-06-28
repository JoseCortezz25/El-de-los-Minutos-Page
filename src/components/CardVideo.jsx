import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/CardVideo.css";

function CardVideo({image, title, description}) {
	return (
		<div className="card">
			<div className="card__thumbnail">
				<img src={image} alt="" />
			</div>
			<h3 className="card__title">
				<Link to="/video">{title}</Link>
			</h3>
			<p className="card__description">
				{description}	
			</p>
		</div>
	);
}

export default CardVideo;
