import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RestaurantPolicy = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="style education col">
					<ul className="list-group">
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Restaurant Policy</li>
							</h4>
							<h3>Thank you for joining our movement!</h3>
							<p className="my-2">
								Please be mindful that after your restaurant is submitted it will undergo processing to
								determine whether or not your menu meets the diet specific restrictions.
							</p>
							<p>
								CD is an autoimmune, genetic, lifelong condition that can present at any age. It causes
								damage to the villi of the intestinal mucosa because of an abnormal immune reaction to
								gluten. Gluten is a protein found in wheat, barley, and rye. With continued ingestion of
								gluten, a person with CD develops malabsorption and subsequent complications. These
								include (but are not exclusive to): anemia, vitamin deficiencies, heart disease,
								osteoporosis, infertility, and neurologic symptoms. Celiac disease is a multi-organ
								system disorder that can affect the thyroid, liver, heart, and reproductive organs, as
								well as the musculoskeletal system and brain.
							</p>
						</div>
					</ul>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-success btn-lg" href="#" role="button">
					Back
				</button>
			</Link>
		</>
	);
};
