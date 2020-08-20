import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CommunityRecipes = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card-group">
				<div className="card" />
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
				<div className="card" />
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in to additional content.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
				<div className="card">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
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
