import React from "react";
import { Link } from "react-router-dom";
import macgfImage from "../../img/gluten-free/mac-gluten-free.jpg";
import pizzagfImage from "../../img/gluten-free/pizza-gluten-free.jpg";
import salmongfImage from "../../img/gluten-free/salmon-gluten-free.jpg";
import zuchiniImage from "../../img/vegan/backed-zuchini.jpg";
import macsaladImage from "../../img/vegan/macaroni-salad-recipe.jpg";
import stuffedpeppersImage from "../../img/vegan/stuffedd-peppers.jpg";

export const GeneralRecipes = props => {
	return (
		<>
			<div className="container m-auto col-9">
				<h2 className="text-center mr-auto ml-auto p-4">
					Check out the recipes uploaded by the FoodCast Community!
				</h2>
				<div className="row ml-auto mr-auto justify-content-center">
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${macgfImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Gluten free Mac and Cheese</h4>
								<p className="card-text">
									Cheesy gluten-free deliciousness that is super easy to make. Kid-approved!
									<br />
									You can use your hands or a food processor to turn toast into crumbs for the
									topping.
									<br />
									If you do not desire a crunchy topping, place reserved 1 cup shredded Cheddar
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Ernesto</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${pizzagfImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Gluten Free Delicious Pizza</h4>
								<p className="card-text">
									Perfectly thick and chewy, and no kneading required, this quick and simple
									gluten-free pizza recipe recipe will have you adding pizza into your regular meal
									rotation.
									<br />
									Luckily you now have a fantastic gluten-free pizza crust recipe.
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Kevin</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${salmongfImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Salmon with Gluten Free Rice</h4>
								<p className="card-text">
									A salmon rice bowl that’s so flavorful, filling and full of good-for-you
									ingredients! Tender Atlantic salmon, roasted tomatoes, fresh herbs, healthy seeds
									and homemade dressing satisfy the savory cravings in under 30 minutes.
									<br />I definitely suggest trying my version!
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Paolo</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row m-auto justify-content-center">
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${zuchiniImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Vegan backed Zuchini</h4>
								<p className="card-text">
									Many breaded zucchini chip recipes call for eggs, milk or other ingredients that
									aren`t vegan. But you don`t actually need animal byproducts in order to make a tasty
									breaded zucchini chip snack.
									<br />
									Here`s an easy way to make them!
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Cesar</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${macsaladImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Vegan Macaroni Salad</h4>
								<p className="card-text">
									Usually the things are laden with heavy dairy products, but not this one! It`s
									completely dairy-free and loaded with the perfect combo of crispy veg. Pasta heaven
									in a bowl. Plus, it comes with a VIDEO!
									<br />
									So stay tuned for more in the near future!
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Marie</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${stuffedpeppersImage})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h4 className="card-title">Vegan stuffed peppers</h4>
								<p className="card-text">
									Italian Vegan Stuffed Peppers features a colorful mix of veggies, flavorful herbs
									and protein rich tempeh for a hearty and delicious lunch, dinner or meal prep idea!
									<br />
									Meet my new favorite stuffed peppers recipe, we just needed another variation!
								</p>
								<p className="card-text">
									<small className="text-muted">Uploaded by Emily</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link className="btn btn-success btn-lg m-auto w-25" to="/">
				Back
			</Link>
		</>
	);
};
