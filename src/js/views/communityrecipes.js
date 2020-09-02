import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CommunityRecipes = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card-deck">
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg"
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
						<p className="card-text">This creamy vegan pasta is the perfect weeknight meal</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_16189.jpg"
							)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							width: "100%",
							height: "250px"
						}}
					/>
					{/* // <img
					// 	src="https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_16189.jpg"
					// 	className="card-img-top "
					// 	alt="squash spaghetti"
					// /> */}
					<div className="card-body">
						<h5 className="card-title">Spaghetti squash - Uploaded by User50</h5>
						<p className="card-text">
							Want your pasta to be zero calories and still taste like pasta? Maybe I have found a
							solution.
						</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes.jpg"
							)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							width: "100%",
							height: "250px"
						}}
					/>
					{/* <img
						src="https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes.jpg"
						className="card-img-top"
						alt="Mediterranean Quinoa Salad"
					/> */}
					<div className="card-body">
						<h5 className="card-title">Mediterranean Quinoa Salad - Uploaded by User13</h5>
						<p className="card-text">
							This Mediterranean quinoa salad recipe is hearty, healthy, and packed with fresh flavor!
						</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
			</div>
			<div className="card-deck">
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg"
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
						<p className="card-text">This creamy vegan pasta is the perfect weeknight meal</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_16189.jpg"
							)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							width: "100%",
							height: "250px"
						}}
					/>
					{/* // <img
					// 	src="https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_16189.jpg"
					// 	className="card-img-top "
					// 	alt="squash spaghetti"
					// /> */}
					<div className="card-body">
						<h5 className="card-title">Spaghetti squash - Uploaded by User50</h5>
						<p className="card-text">
							Want your pasta to be zero calories and still taste like pasta? Maybe I have found a
							solution.
						</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
				<div className="card">
					<div
						className="image1"
						style={{
							backgroundImage: `url(
								"https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes.jpg"
							)`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							width: "100%",
							height: "250px"
						}}
					/>
					{/* <img
						src="https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes.jpg"
						className="card-img-top"
						alt="Mediterranean Quinoa Salad"
					/> */}
					<div className="card-body">
						<h5 className="card-title">Mediterranean Quinoa Salad - Uploaded by User13</h5>
						<p className="card-text">
							This Mediterranean quinoa salad recipe is hearty, healthy, and packed with fresh flavor!
						</p>
						<p className="card-text">Click here to check the full steps</p>
					</div>
				</div>
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
