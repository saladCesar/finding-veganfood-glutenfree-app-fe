import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RestaurantPolicy = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text">Here we will print the RestaurantPolicy</div>

			<Link to="/addrestaurant">
				<button className="btn btn-success btn-lg" href="#" role="button">
					Back
				</button>
			</Link>
		</>
	);
};
