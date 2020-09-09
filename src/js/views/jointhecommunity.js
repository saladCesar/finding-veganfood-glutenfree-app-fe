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
									backgroundImage: `url(${profiletwo})`,
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
									backgroundImage: `url(${profilethree})`,
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
									backgroundImage: `url(${profilefour})`,
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
									backgroundImage: `url(${profilefive})`,
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
									backgroundImage: `url(${profilesixt})`,
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
									backgroundImage: `url(${profileseven})`,
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
									backgroundImage: `url(${profileeight})`,
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
