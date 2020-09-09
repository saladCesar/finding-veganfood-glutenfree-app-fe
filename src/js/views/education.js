import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		//Code education file.js to look like an article//

		<div className="container">
			<h1>Interested in our way of eating?</h1>
			<div className="row">
				<div className="style education col">
					<ul className="list-group">
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Health</li>
							</h4>

							<p>
								Numerous studies have shown that plant-based nutrition has significant health benefits
								that include: Healthier weight Lower risk of cancer and diabetes Longer life Better
								cardiovascular health/reversal or prevention of heart disease Lower cholesterol Lower
								blood sugar Lower blood pressure Fewer medications Improved symptoms of rheumatoid
								arthritis For example, a 2009 article published by the American Journal of Clinical
								Nutrition reported that vegetarians typically enjoy a lower risk of cardiovascular
								disease, obesity, Type 2 diabetes, and some cancers than omnivores. Other findings
								published in the American Journal of Clinical Nutrition article included: Vegan diets
								increase the intake of protective nutrients and phytochemicals and minimize the intake
								of dietary factors related to a number of chronic diseases. Vegans (compared to
								omnivores) consume greater quantities of fruit and vegetables, which are associated with
								lower blood cholesterol, lower incidences of stroke, and lower risk of mortality from
								stroke and heart disease. Vegans consume more whole grains, soy, and nuts, all of which
								provide significant cardiovascular protection. Vegans consumer more legumes, fruits,
								vegetables, tomatoes, allium vegetables, fiber, and vitamin C than omnivores, all of
								which are protective against cancer of the lung, mouth, esophagus, stomach, and
								prostate. Because red meat and processed meat consumption are associated with an
								increased risk of esophageal, liver, lung, and colorectal cancers (ranging from 20 to 60
								percent), this risk to vegans is greatly reduced. Vegans tend to have a high intake of
								tofu and other soy products, which are suggested to have a beneficial effect on bone
								health in postmenopausal women.
							</p>
						</div>
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Nutrition</li>
							</h4>

							<p>
								CD is an autoimmune, genetic, lifelong condition that can present at any age. It causes
								damage to the villi of the intestinal mucosa because of an abnormal immune reaction to
								gluten. Gluten is a protein found in wheat, barley, and rye. With continued ingestion of
								gluten, a person with CD develops malabsorption and subsequent complications. These
								include (but are not exclusive to): anemia, vitamin deficiencies, heart disease,
								osteoporosis, infertility, and neurologic symptoms. Celiac disease is a multi-organ
								system disorder that can affect the thyroid, liver, heart, and reproductive organs, as
								well as the musculoskeletal system and brain. Symptoms are different than people think
								The presentation of celiac disease has changed dramatically over the last decade. This
								disease is a chameleon whose presentation varies from person to person. Once thought to
								be a “wasting” disease, we now know that 40% of CD patients are overweight or obese at
								diagnosis. Another common misconception is that gastrointestinal symptoms are required
								in order to initiate a diagnostic evaluation. However, gastrointestinal symptoms only
								occur in 30–40% of celiac patients at diagnosis. Their absence should not preclude an
								assessment. “Atypical” presentations for CD are now common, including factors such as
								anxiety, depression, anemia, fatigue, osteopenia, rashes, dental enamel defects, and
								aphthous ulcers
							</p>
						</div>
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Ethics</li>
							</h4>

							<p>We are destroying the planet in the name of food</p>
						</div>
						<div className="col">
							<h4>
								<li className="list-group-item">Documentaries</li>
							</h4>

							<p>Earthlings, Forks over Knives, Cowspiracy</p>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};
Education.PropTypes = {
	match: PropTypes.objects
};
