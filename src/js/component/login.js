import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState(";");
	return (
		<>
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is your login section!!
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Go home and look at delicious food
				</a>
			</div>
		</>
	);
};