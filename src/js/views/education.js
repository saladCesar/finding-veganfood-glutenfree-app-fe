import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		<Link to="/">
			<button className="btn btn-primary btn-lg" href="#" role="button">
				Back home
			</button>
		</Link>
	);
};

Education.propTypes = {
	match: PropTypes.object
};
