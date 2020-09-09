import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		//Code education file.js to look like an article//

		<div className="container">
			<h1>Interested in our way of eating?</h1>
			<div className="row">
				<div className="style education col">
					<ul className="list-group">
						<div className="col">
							<li className="list-group-item">Health</li>
							<p>Healthy habits</p>
							<script />
						</div>
						<div className="col">
							<li className="list-group-item">Nutrition</li>
							<p>Lets see what the doctors have say!</p>
						</div>
						<div className="col">
							<li className="list-group-item">Ethics</li>
							<p>We are destroying the planet in the name of food</p>
						</div>
						<div className="col">
							<li className="list-group-item">Documentaries</li>
							<p>Earthlings, Forks over Knives, Cowspiracy</p>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};
Education.PropTypes = {
	match: PropTypes.objects
};
