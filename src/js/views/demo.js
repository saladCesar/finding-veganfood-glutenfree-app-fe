import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<h3>This is the demo.js file</h3>
				<div className="search-container" />
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
