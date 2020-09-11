import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Createprofile = () => {
	const { store, actions } = useContext(Context);
	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(`submit here ${fullName} ${diet} ${email} ${password} ${phone} ${avatar}`);
		var newProfileData = {
			name: fullName,
			diet: diet,
			email: email,
			password: password,
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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [avatar, setAvatar] = useState("");
	var history = useHistory();
	return (
		<>
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Please create your profile</h1>
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
							<label>Password</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								value={password}
								onChange={event => setPassword(event.target.value)}
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
						<button type="submit" className="btn btn-success form-control">
							Save and create profile
						</button>
					</form>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-success btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</>
	);
};
