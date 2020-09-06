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
					<div className="style education">
						<ul className="list-group">
							<li className="list-group-item">Health</li>
							<p>Healthy habits</p>
							<li className="list-group-item">Nutrition</li>
							<p>Lets see what the doctors have say!</p>
							<li className="list-group-item">Ethics</li>
							<li className="list-group-item">Documentaries</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
Education.PropTypes = {
	match: PropTypes.objects
};
