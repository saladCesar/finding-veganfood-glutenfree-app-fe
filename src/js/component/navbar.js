import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../store/appContext";

export const Titleandsearch = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand col-xs-6 col-md-4" href="#">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._fsat6uTQCDr7ABAAdIvcwAAAA%26pid%3DApi&f=1"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
				Happy fun foods?
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
					/>
					<Link to="/restaurants">
						<button className="btn btn-outline-dark my-2 my-0">Search</button>
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
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._fsat6uTQCDr7ABAAdIvcwAAAA%26pid%3DApi&f=1"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
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
						<Link to="/communityrecipes">
							<button className="btn">Community Recipes</button>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/education">
							<button className="btn">Education</button>
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
							Username
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								<Link to="/login">
									<button className="btn"> Log in</button>
								</Link>
							</a>
							<a className="dropdown-item" href="#">
								My Recipes
							</a>
							<a className="dropdown-item" href="#">
								My Reviews
							</a>
							<a className="dropdown-item" href="#">
								My Favorites
							</a>
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
									<button className="btn btn-primary">Login</button>
								)}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
