import React from "react";
import { Link } from "react-router-dom";

export const Restaurants = props => {
	return (
		<Link to="/">
			<button className="btn btn-primary btn-lg" href="#" role="button">
				Back home
			</button>
		</Link>
	);
};
