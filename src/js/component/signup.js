import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Signup = () => {
	// const { store, actions } = useContext(Context);
	// const [email, setEmail] = useState("");
	return (
		<>
			<div className="Jumbotron">
				<h1 className="display-4">Signup</h1>
				<p className="lead">This is your login section!!</p>
				<hr className="my-4" />
				<p>We are going to login</p>
				<a className="btn btn-danger btn-lg" href="#" role="button">
					DangerZone
				</a>
			</div>
		</>
	);
};
