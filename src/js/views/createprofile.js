import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Createprofile = () => {
	const { store, actions } = useContext(Context);
	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(`submit here ${fullName} ${diet} ${rewards} ${email} ${phone} ${avatar}`);
		var newProfileData = {
			name: fullName,
			diet: diet,
			rewards: rewards,
			email: email,
			phone_number: phone,
			user_avatar: avatar
		};
		console.log(`This is the object ${newProfileData.name}`);
		let success = await actions.createContact(newProfileData);
		if (success) {
			history.push("/");
		} else {
			window.alert("Something went wrong, check your input and try again.");
		}
	}
	const [fullName, setFullName] = useState("");
	const [diet, setDiet] = useState("");
	const [rewards, setRewards] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [avatar, setAvatar] = useState("");
	var history = useHistory();
	return (
		<>
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Please create your profile amigo!</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								value={fullName}
								onChange={event => setFullName(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Diet: Vegan - Glutten Free</label>
							<input
								type=""
								className="form-control"
								placeholder="Vegan - Gluten Free"
								value={diet}
								onChange={event => setDiet(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Rewards</label>
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								value={rewards}
								onChange={event => setRewards(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone Number</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={phone}
								onChange={event => setPhone(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Choose an avatar</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={avatar}
								onChange={event => setAvatar(event.target.value)}
							/>
						</div>
						<button type="submit" className="btn btn-primary form-control">
							save
						</button>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
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
