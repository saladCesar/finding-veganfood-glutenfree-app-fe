import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="col">
			<div className="form-signin" />
			<img
				className="mb-4"
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._fsat6uTQCDr7ABAAdIvcwAAAA%26pid%3DApi&f=1"
				alt=""
				width="72"
				height="72"
			/>
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label htmlFor="inputEmail" className="sr-only">
				Email address
			</label>
			<input
				type="email"
				id="inputEmail"
				className="form-control"
				placeholder="Email address"
				required
				autoFocus
				onChange={e => setEmail(e.target.value)}
			/>
			<label htmlFor="inputPassword" className="sr-only">
				Password
			</label>
			<input
				type="password"
				id="inputPassword"
				className="form-control"
				placeholder="Password"
				required
				onChange={e => setPassword(e.target.value)}
			/>
			<div className="checkbox mb-3">
				<label>
					<input type="checkbox" value="remember-me" /> Remember me
				</label>
			</div>
			<Link to="/">
				<button
					onClick={() => actions.login(email, password)}
					className="btn btn-lg btn-success btn-block"
					type="submit">
					Sign in
				</button>
			</Link>
			<p className="mt-5 mb-3 text-muted">© 2017-2020</p>
		</div>
	);
};

Login.propTypes = {
	match: PropTypes.object
};
