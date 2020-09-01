import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const JoinTheCommunity = props => {
	const [state, setState] = useState({});
	return (
		<>
			<Link to="/">
				<button className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};
