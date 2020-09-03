import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CommunityRecipes = props => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadRecipes();
	}, []);
	return (
		<>
			<div className="card-deck">
				{store.recipe.map((item, index) => {
					return (
						<div
							key={index}
							className="card"
							style={{
								width: "20px"
							}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(
								${item.images}
							)`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							{/* <img
						src="https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg"
						className="card-img-top img-thumbnail"
						alt="creamy vegan pasta"
					/> */}
							<div className="card-body">
								<h5 className="card-title">Creamy Vegan Pasta - Uploaded by User765</h5>
								<p className="card-text">{item.recipe_description}</p>
								<p className="card-text">Click here to check the full steps</p>
							</div>
						</div>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};

CommunityRecipes.propTypes = {
	match: PropTypes.object
};
