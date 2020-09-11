import React from "react";
import { Link } from "react-router-dom";
import coupon from "../../img/coupons/couponfinal.jpg";

export const Rewards = props => {
	return (
		<>
			<div className="member-text mr-auto ml-auto my-3 text-justify">
				<h2 className="pb-4 pt-2">Benefits of becoming a FoodCast member</h2>
				<h5>What are the benefits of becoming a FoodCast member?</h5>
				<p className="benefits-content text-justify">
					As a FoodCast member, you will be able to upload recipes that will be available for all the people
					<br />
					around the world! As you upload recipes, you will win coupons for restaurants and supermarkets, we
					<br />
					know that having a specific diet cost more, that why we are here for! Keep posting recipes, and you
					<br />
					will earn more points as you go.
				</p>

				<h5 className="pt-3 pb-2">How can I become a member?</h5>
				<p className="benefits-content">
					Super Easy! Just click on the `Sign up` button inside Sign In,
					<br />
					you just need te enter your email addres and a password, and it`s done!
					<br />
					Make sure you tell your friends so they can start sharing recipes too!
					<br />
				</p>
			</div>

			<div
				className="container col-4 p-1"
				style={{
					backgroundImage: `url(${coupon})`,
					backroundPosition: "center",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					width: "100%",
					height: "10px"
				}}
			/>

			<Link className="btn btn-success btn-lg m-auto w-25" to="/">
				Back
			</Link>
		</>
	);
};
