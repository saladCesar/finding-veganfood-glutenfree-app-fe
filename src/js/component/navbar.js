import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../store/appContext";
import logoFoodCast from "../../img/logo/logo-noback.jpg";

export const Titleandsearch = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand col-xs-6 col-md-4" href="#">
				<img
					src={logoFoodCast}
					width="50"
					height="80"
					className="d-inline-block align-center"
					alt=""
					loading="lazy"
				/>
				Welcome to FoodCast!
				<img
					src={logoFoodCast}
					width="50"
					height="80"
					className="d-inline-block align-center"
					alt=""
					loading="lazy"
				/>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="col-6">
				<form className="form-inline">
					<input
						className="form-control mr-2 col-8"
						type="search"
						placeholder="Supermarket, Restaurants..."
						aria-label="Search"
						onChange={e => setSearch(e.target.value)}
					/>
					<Link to="/restaurants">
						<button className="btn btn-outline-dark my-2 my-0" onClick={() => actions.search(search)}>
							Search
						</button>
					</Link>
				</form>
			</div>
		</nav>
	);
};
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-success">
			<a className="navbar-brand" href="#">
				Eat healthy, feel great!
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-item">
							<Link to="/">
								<button className="btn">Home</button>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<Link to="/education">
							<button className="btn">Education</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/generalrecipes">
							<button className="btn">General Recipes</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/addrestaurant">
							<button className="btn">Upload your restaurant!</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/jointhecommunity">
							<button className="btn"> Join the community!</button>
						</Link>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Hello, Sign in
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								<Link to="/createrecipe">
									<button className="dropdown-item">Upload recipe</button>
								</Link>
							</a>
							<Link to="/myreviews">
								<a className="dropdown-item" href="#">
									My Reviews
								</a>
							</Link>
							<Link to="/myfavorites">
								<a className="dropdown-item" href="#">
									My Favorites
								</a>
							</Link>
							<Link to="/communityrecipes">
								<button className="dropdown-item" href="#">
									My Recipes
								</button>
							</Link>
							<a className="dropdown-item" href="#">
								Rewards
							</a>

							<div className="dropdown-divider" />
							<Link to="/createprofile">
								<button className="dropdown-item" href="#">
									Not a member? Sign up!
								</button>
							</Link>
							<div className="dropdown-item ml-auto">
								{store.token != null ? (
									<button onClick={() => actions.logout()} className="btn btn-primary">
										Logout
									</button>
								) : (
									<Link to="/login">
										<button className="btn btn-success">Login</button>
									</Link>
								)}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
