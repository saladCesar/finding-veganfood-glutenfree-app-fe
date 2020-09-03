import React from "react";
import { Link } from "react-router-dom";

export const GeneralRecipes = props => {
	return (
		<Link to="/">
			<button className="btn btn-primary btn-lg" href="#" role="button">
				Back home
			</button>
		</Link>
	);
};
