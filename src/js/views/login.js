import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<form className="px-4 py-3">
				<div className="form-group">
					<label htmlFor="exampleDropdownFormEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleDropdownFormEmail1"
						placeholder="Please enter your email address"
						required
						autoFocus
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleDropdownFormPassword1">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleDropdownFormPassword1"
						placeholder="Password"
						required
						autoFocus
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<div className="form-check">
						<input type="checkbox" className="form-check-input" id="dropdownCheck" />
						<label className="form-check-label" htmlFor="dropdownCheck">
							Remember me
						</label>
					</div>
				</div>
				<button
					onClick={() => actions.login(email, password)}
					className="btn btn-lg btn-primary btn-block"
					type="button">
					Sign in
				</button>
			</form>
			<div className="dropdown-divider" />
			<a className="dropdown-item" href="#">
				New around here? Sign up
			</a>
			<a className="dropdown-item" href="#">
				Forgot password?
			</a>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</>
	);
};

Login.propTypes = {
	match: PropTypes.object
};
