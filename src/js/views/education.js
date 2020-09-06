import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<h1>Interested in our way of eating?</h1>
				<div className="row">
					<ul className="list-group">
						<li className="list-group-item">Health</li>
						<li className="list-group-item">Nutrition</li>
						<li className="list-group-item">Ethics</li>
						<li className="list-group-item">Documentaries</li>
					</ul>
				</div>
				<Link to="/">
					<button className="btn btn-success btn-lg" href="#" role="button">
						Back home
					</button>
				</Link>
			</div>
		</>
	);
};
Education.PropTypes = {
	match: PropTypes.objects
};
