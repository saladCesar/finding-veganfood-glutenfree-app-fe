import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddRestaurant = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [operational_hours, setOperational_hours] = useState("");
	const [website, setWebsite] = useState("");
	const [diet, setDiet] = useState("");
	const [images, setImages] = useState("");
	var history = useHistory();
	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(
			`submit here ${name} ${diet} ${address} ${email} ${phone} ${operational_hours} ${website} ${images}`
		);
		var newRestaurantData = {
			name: name,
			diet: diet,
			address: address,
			email: email,
			phone: phone,
			operational_hours: operational_hours,
			website: website,
			images: images
		};
		console.log(`This is the object ${newRestaurantData.name}`);
		let success = await actions.addRestaurant(newRestaurantData);
		if (success) {
			history.push("/");
		} else {
			window.alert("Something went wrong, check your input and try again.");
		}
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add your Restaurant</h1>
				<div className="text-right">
					<Link to="/restaurantpolicy">
						<button type="button" className="btn btn-dark">
							Restaurant Policy
						</button>
					</Link>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Name of the Restaurant</label>
						<input
							type="text"
							className="form-control"
							placeholder="Restaurant Name"
							value={name}
							onChange={event => setName(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={event => setPhone(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
							onChange={event => setAddress(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Upload a photo of the Restaurant</label>
						<input
							type="text"
							className="form-control"
							placeholder="Upload restaurant photo"
							value={images}
							onChange={event => setImages(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Operarional hours</label>
						<input
							type="text"
							className="form-control"
							placeholder="Operational hours"
							value={operational_hours}
							onChange={event => setOperational_hours(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Website</label>
						<input
							type="email"
							className="form-control"
							placeholder="www.example.com"
							value={email}
							onChange={event => setWebsite(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Diet</label>
						<input
							type="text"
							className="form-control"
							placeholder="Vegan - Gluten Free - Both"
							value={diet}
							onChange={event => setDiet(event.target.value)}
						/>
					</div>
					{/* <button
						// onClick={() => actions.addRestaurant(newRestaurantData)}
						type="submit"
						className="btn btn-primary form-control">
						save
					</button> */}
					<Link className="mt-3 w-100 text-center" to="/">
						<button type="submit" className="btn btn-success form-control">
							Upload your restaurant (You will be contacted upon approval)
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
