import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import veganheart from "../../img/veganheart.jpg";
import glutenfree from "../../img/glutenfree.jpg";

export const RestaurantPolicy = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="style education col">
					<div className="list-group">
						<div className="col p-0">
							<h2 className="text-center mr-auto ml-auto p-4">
								Restaurant Policy - Please read carefully
							</h2>
							<h4>Thank you for joining our movement!</h4>
							<p className="text-justify">
								<b>
									Please be mindful that after your restaurant is submitted it will undergo processing
									to determine whether or not your menu meets the diet specific restrictions.
								</b>
							</p>
							<p className="text-justify">
								Celiac Disease is an autoimmune, genetic, lifelong condition that can present at any
								age. It causes damage to the villi of the intestinal mucosa because of an abnormal
								immune reaction to gluten. Gluten is a protein found in wheat, barley, and rye. With
								continued ingestion of gluten, a person with CD develops malabsorption and subsequent
								complications. These include (but are not exclusive to): anemia, vitamin deficiencies,
								heart disease, osteoporosis, infertility, and neurologic symptoms. Celiac disease is a
								multi-organ system disorder that can affect the thyroid, liver, heart, and reproductive
								organs, as well as the musculoskeletal system and brain.
							</p>

							<div className="row">
								<div className="col">
									<h4>What does Vegan mean?</h4>
									<p className="my-2 text-justify">
										A vegan is a person who tends to be much healthier than their dairy and
										meat-eating counterparts! Why? Because a vegan eats no animal products – red and
										white meats, fish and other water creatures, eggs, dairy and insect products
										such as honey and cochineal.{" "}
										<b>
											That means no damaging animal protein, animal fats or cholesterol in their
											diet.
										</b>{" "}
										Far from going short, they can – and are more likely to – pack their diet with a
										wide range of healthy, disease busting foods high in vegetable protein, fibre,
										complex carbohydrates, vitamins, minerals and good fats. These include fresh
										fruit and veg, a wide range of pulses, including peas, beans and lentils,
										wholegrain pastas, breads and rice, nuts and seeds, herbs and spices and
										vegetable oils – especially flaxseed and virgin olive oil.
									</p>
									<p className="text-justify">
										<b>
											Vegans are individuals who avoid animal products for ethical, health, or
											environmental reasons — or a combination of the three.
										</b>{" "}
										Instead, they eat various plant foods, including fruits, vegetables, whole
										grains, legumes, nuts, seeds, and products made from these foods.
									</p>
								</div>
								<div
									className="picture-body col-6"
									style={{
										backgroundImage: `url(${veganheart})`,
										backroundPosition: "center",
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										width: "50%",
										height: "400px"
									}}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h4 className="text">Gluten-free: What does that mean?</h4>
							<p className="my-2 text-justify">
								In August 2013, the United States Food and Drug Administration (FDA) issued a new
								definition for “gluten-free” for the purpose of food labeling. For a food to be labeled
								as gluten-free, the FDA states that it must contain no more than 20 parts per million
								(ppm) of gluten. The choice of 20 ppm rather than zero ppm is because current technology
								cannot reliably measure gluten presence below 20ppm. Evidence suggests that trace
								amounts of gluten, defined as up to 20 ppm, do not have adverse health effects on people
								with celiac disease.
							</p>
							<h4>What is Celiac Disease?</h4>
							<p className="my-2 text-justify">
								Celiac disease is a serious autoimmune disease that occurs in genetically predisposed
								people where the ingestion of gluten leads to damage in the small intestine. It is
								estimated to affect 1 in 100 people worldwide. Two and one-half million Americans are
								undiagnosed and are at risk for long-term health complications.
							</p>
							<p className="text-justify">
								When people with celiac disease eat gluten (a protein found in wheat, rye and barley),
								their body mounts an immune response that attacks the small intestine.{" "}
								<b>
									These attacks lead to damage on the villi, small fingerlike projections that line
									the small intestine, that promote nutrient absorption.
								</b>{" "}
								When the villi get damaged, nutrients cannot be absorbed properly into the body. Celiac
								disease is hereditary, meaning that it runs in families. People with a first-degree
								relative with celiac disease (parent, child, sibling) have a 1 in 10 risk of developing
								celiac disease.
							</p>
						</div>
						<div
							className="picture-body col-5"
							style={{
								backgroundImage: `url(${glutenfree})`,
								backroundPosition: "center",
								backgroundRepeat: "no-repeat",
								width: "50%",
								height: "550px"
							}}
						/>
					</div>
				</div>
			</div>
			<Link className="btn btn-success btn-lg w-25 m-auto" to="/addrestaurant">
				Back
			</Link>
		</>
	);
};
