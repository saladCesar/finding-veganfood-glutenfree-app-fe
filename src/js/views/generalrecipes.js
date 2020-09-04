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
			<div className="card-group">
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
			<div className="card-group">
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div
					className="card"
					style={{
						height: "400px",
						width: "300px"
					}}>
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
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
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
