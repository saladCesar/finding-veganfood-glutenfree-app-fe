import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		{
			/* <div className="row justify-content-center">
                <div className="col">
                <p>Helloooo</p>
                </div>
            </div> */
		},
		(
			<Link to="/">
				<button className="btn btn-success btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		)
	);
};
Education.PropTypes = {
	match: PropTypes.objects
};
