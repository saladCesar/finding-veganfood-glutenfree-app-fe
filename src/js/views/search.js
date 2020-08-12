import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/search.scss";

export class Search extends React.Component {
	render() {
		return (
			<div className="container">
				<div ClassName="title d-flex justify-content-center">
					<h3>What are you looking for?</h3>
				</div>
				<div className="search-container">
					<form action="/action_page.php">
						<div className="d-flex flex-row col-10">
							<input
								className="btn btn-lg btn-block border border-dark"
								type="text"
								placeholder="Supermarket, Restaurants..."
								name="search"
							/>
							<button type="submit">
								<i className="fa fa-search " />
							</button>
						</div>
					</form>
				</div>
				<div ClassName="filters display: flex;justify-content: space-between;">
					<button className="btn btn-success p-1">Gluten Free</button>
					<button className="btn btn-success p-1">Vegan</button>
					<button className="btn btn-success p-1">Supermarkets</button>
					<button className="btn btn-success p-1">Restaurants</button>
					<button className="btn btn-success p-1">TOP 10</button>
				</div>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
