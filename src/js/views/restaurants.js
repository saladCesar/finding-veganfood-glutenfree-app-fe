import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Restaurants = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.searchResults.map((item, index) => {
				return <div key={index}>{item.name}</div>;
			})}
			<Link to="/">
				<button className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};
