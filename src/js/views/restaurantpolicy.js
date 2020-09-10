import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RestaurantPolicy = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="row">
				<div className="style education col">
					<ul className="list-group">
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Restaurant Policy</li>
							</h4>
							<h5>Thank you for joining our movement!</h5>
							<p className="my-2">
								Please be mindful that after your restaurant is submitted it will undergo processing to
								determine whether or not your menu meets the diet specific restrictions.
							</p>
						</div>
					</ul>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-success btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};
