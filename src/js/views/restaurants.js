import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import resto1 from "../../img/restaurants/restaurant1.jpg";
import restowater from "../../img/restaurants/restowater.jpg";

export const Restaurants = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadRecipes();
	}, []);
	return (
		<div className="container">
			<ul className="row">
				{store.searchResults.map((item, index) => {
					return (
						<div key={index} className="col-3 my-3">
							<div className="card">
								<div
									className="image1"
									style={{
										backgroundImage: `url(${item.images})`,
										backroundPosition: "center",
										backgroundSize: "cover",
										width: "100%",
										height: "250px"
									}}
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Address: {item.address}</p>
								<p className="card-text">Diet: {item.diet}</p>
								<p className="card-text">Phone number: {item.phone_number}</p>
							</div>
						</div>
					);
				})}
			</ul>
			<Link className="btn btn-success btn-lg" to="/restaurants">
				Back to Search
			</Link>
		</div>
	);
};
