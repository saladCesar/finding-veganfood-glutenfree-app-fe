import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileone from "../../img/profiles/profileone.jpg";
import profiletwo from "../../img/profiles/profiletwo.jpg";
import profilethree from "../../img/profiles/profilethree.jpg";
import profilefour from "../../img/profiles/profilefour.jpg";
import profilefive from "../../img/profiles/profilefive.jpg";
import profilesixt from "../../img/profiles/profilesixt.jpg";
import profileseven from "../../img/profiles/profileseven.jpg";
import profileeight from "../../img/profiles/profileeight.jpg";

export const JoinTheCommunity = props => {
	const [state, setState] = useState({});
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profileone})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Kevin Smith</h5>
								<p className="card-text">Vegan</p>
								<p className="card-text">Miami, Florida</p>
								<p className="card-text">
									<small className="text-muted">Member since 2016</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profiletwo})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Astrid Marquardt</h5>
								<p className="card-text">Gluten Free</p>
								<p className="card-text">Berlin, Germany</p>
								<p className="card-text">
									<small className="text-muted">Member since 2019</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profilethree})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Edgar Ramirez</h5>
								<p className="card-text">Vegan</p>
								<p className="card-text">Bogota, Colombia</p>
								<p className="card-text">
									<small className="text-muted">Member since 2018</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profilefour})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Sophie Daniels</h5>
								<p className="card-text">Gluten Free</p>
								<p className="card-text">New york City, New York</p>
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
									backgroundImage: `url(${profilefive})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Anand Jaidev</h5>
								<p className="card-text">Vegan</p>
								<p className="card-text">Los Angeles, California</p>
								<p className="card-text">
									<small className="text-muted">Member since 2020</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profilesixt})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Natalie Miller</h5>
								<p className="card-text">Gluten Free</p>
								<p className="card-text">Stocolm, Sweden</p>
								<p className="card-text">
									<small className="text-muted">Member since 2017</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profileseven})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Elisa Frederick</h5>
								<p className="card-text">Vegan</p>
								<p className="card-text">Detroit, Michigan</p>
								<p className="card-text">
									<small className="text-muted">Member since 2018</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-3 my-3">
						<div className="card" style={{}}>
							<div
								className="image1"
								style={{
									backgroundImage: `url(${profileeight})`,
									backroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "250px"
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">Carlo Ancelotti</h5>
								<p className="card-text">Vegan</p>
								<p className="card-text">Rome, Italy</p>
								<p className="card-text">
									<small className="text-muted">Member since 2016</small>
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
