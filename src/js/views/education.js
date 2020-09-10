import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import education from "../../img/education/image-education.jpg";
import piramid from "../../img/education/piramid.jpg";

export const Education = props => {
	const { store, actions } = useContext(Context);
	return (
		//Code education file.js to look like an article//

		<div className="container">
			<div
				className="image1"
				style={{
					backgroundImage: `url(${education})`,
					backroundPosition: "center",
					backgroundSize: "cover",
					width: "100%",
					height: "150px"
				}}
			/>
			<h1>Interested in our way of eating?</h1>
			<div className="row">
				<div className="style education col">
					<ul className="list-group">
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Health and Nutrition</li>
							</h4>
							<h5>Vegan</h5>
							<div className="vegan-body">
								<div className="row">
									<div className="vegan-text col-6">
										<p className="my-2">
											Numerous studies have shown that plant-based nutrition has significant
											health benefits that include: Healthier weight Lower risk of cancer and
											diabetes Longer life Better cardiovascular health/reversal or prevention of
											heart disease Lower cholesterol Lower blood sugar Lower blood pressure Fewer
											medications Improved symptoms of rheumatoid arthritis For example, a 2009
											article published by the American Journal of Clinical Nutrition reported
											that vegetarians typically enjoy a lower risk of cardiovascular disease,
											obesity, Type 2 diabetes, and some cancers than omnivores. Other findings
											published in the American Journal of Clinical Nutrition article included:
											Vegan diets increase the intake of protective nutrients and phytochemicals
											and minimize the intake of dietary factors related to a number of chronic
											diseases.
										</p>
										<p className="my-2">
											Vegans (compared to omnivores) consume greater quantities of fruit and
											vegetables, which are associated with lower blood cholesterol, lower
											incidences of stroke, and lower risk of mortality from stroke and heart
											disease. Vegans consume more whole grains, soy, and nuts, all of which
											provide significant cardiovascular protection. Vegans consumer more legumes,
											fruits, vegetables, tomatoes, allium vegetables, fiber, and vitamin C than
											omnivores, all of which are protective against cancer of the lung, mouth,
											esophagus, stomach, and prostate. Because red meat and processed meat
											consumption are associated with an increased risk of esophageal, liver,
											lung, and colorectal cancers (ranging from 20 to 60 percent), this risk to
											vegans is greatly reduced. Vegans tend to have a high intake of tofu and
											other soy products, which are suggested to have a beneficial effect on bone
											health in postmenopausal women.
										</p>
									</div>
									<div
										className="picture-body col-6"
										style={{
											backgroundImage: `url(${piramid})`,
											backroundPosition: "center",
											backgroundSize: "cover",
											width: "50%"
										}}
									/>
								</div>
							</div>
						</div>
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item"></li>
							</h4>
							<h5>Vegan</h5>
							<div className="vegan-body">
								<div className="row">
									<div className="vegan-text col-6">
										<p className="my-2">
											Numerous studies have shown that plant-based nutrition has significant
											health benefits that include: Healthier weight Lower risk of cancer and
											diabetes Longer life Better cardiovascular health/reversal or prevention of
											heart disease Lower cholesterol Lower blood sugar Lower blood pressure Fewer
											medications Improved symptoms of rheumatoid arthritis For example, a 2009
											article published by the American Journal of Clinical Nutrition reported
											that vegetarians typically enjoy a lower risk of cardiovascular disease,
											obesity, Type 2 diabetes, and some cancers than omnivores. Other findings
											published in the American Journal of Clinical Nutrition article included:
											Vegan diets increase the intake of protective nutrients and phytochemicals
											and minimize the intake of dietary factors related to a number of chronic
											diseases.
										</p>
										<p className="my-2">
											Vegans (compared to omnivores) consume greater quantities of fruit and
											vegetables, which are associated with lower blood cholesterol, lower
											incidences of stroke, and lower risk of mortality from stroke and heart
											disease. Vegans consume more whole grains, soy, and nuts, all of which
											provide significant cardiovascular protection. Vegans consumer more legumes,
											fruits, vegetables, tomatoes, allium vegetables, fiber, and vitamin C than
											omnivores, all of which are protective against cancer of the lung, mouth,
											esophagus, stomach, and prostate. Because red meat and processed meat
											consumption are associated with an increased risk of esophageal, liver,
											lung, and colorectal cancers (ranging from 20 to 60 percent), this risk to
											vegans is greatly reduced. Vegans tend to have a high intake of tofu and
											other soy products, which are suggested to have a beneficial effect on bone
											health in postmenopausal women.
										</p>
									</div>
									<div
										className="picture-body col-6"
										style={{
											backgroundImage: `url(${piramid})`,
											backroundPosition: "center",
											backgroundSize: "cover",
											width: "50%"
										}}
									/>
								</div>
							</div>
						</div>
						{/* <div className="col">
							<h5>Gluten-Free</h5>
							<p className="my-2">
								CD is an autoimmune, genetic, lifelong condition that can present at any age. It causes
								damage to the villi of the intestinal mucosa because of an abnormal immune reaction to
								gluten. Gluten is a protein found in wheat, barley, and rye. With continued ingestion of
								gluten, a person with CD develops malabsorption and subsequent complications. These
								include (but are not exclusive to): anemia, vitamin deficiencies, heart disease,
								osteoporosis, infertility, and neurologic symptoms. Celiac disease is a multi-organ
								system disorder that can affect the thyroid, liver, heart, and reproductive organs, as
								well as the musculoskeletal system and brain.{" "}
							</p>
							<p className="my-2">
								Symptoms are different than people think The presentation of celiac disease has changed
								dramatically over the last decade. This disease is a chameleon whose presentation varies
								from person to person. Once thought to be a “wasting” disease, we now know that 40% of
								CD patients are overweight or obese at diagnosis. Another common misconception is that
								gastrointestinal symptoms are required in order to initiate a diagnostic evaluation.
								However, gastrointestinal symptoms only occur in 30–40% of celiac patients at diagnosis.
								Their absence should not preclude an assessment. “Atypical” presentations for CD are now
								common, including factors such as anxiety, depression, anemia, fatigue, osteopenia,
								rashes, dental enamel defects, and aphthous ulcers
							</p>
						</div> */}
						<div className="col">
							<h4>
								{" "}
								<li className="list-group-item">Ethics</li>
							</h4>

							<p className="my-2">
								Pollution is reaching crisis point across the planet, and animal agriculture has a lot
								to do with the continued poisoning of our land, air, seas, oceans, lakes and rivers.
								Multiple factors are at work here. From the waste that farms create to the chemicals
								that are used in the factory farming process, all are having a dramatic impact on the
								health of planet.
							</p>
							<p className="my-2">
								Nutrient run off is getting into our rivers which then feeds into our oceans and our
								seas causing huge “dead zones”, killing off the marine life that would ordinarily thrive
								in coastal regions. The air that we breath is being adversely affected by the release of
								huge amounts of ammonia, hydrogen sulfide and methane, and the land surrounding factory
								farms is often polluted when “waste lagoons” leak, break or overflow. Then there is way
								in which these cesspools are emptied. Believe it or not, these lagoons of excrement and
								urine are being spread across large areas of land by giant sprays, some of which are
								dangerously close to human homes. As unbelievable and unpalatable as it may be, this is
								happening day in, day out…all thanks to the demand for meat.
							</p>
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
