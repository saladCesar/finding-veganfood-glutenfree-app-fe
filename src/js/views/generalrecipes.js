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
			<div className="container">
				<div className="row">
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
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
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};
