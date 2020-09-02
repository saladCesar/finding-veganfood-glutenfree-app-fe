import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateRecipe = () => {
	const { store, actions } = useContext(Context);
	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(
			`submit here ${profile_id} ${diet} ${images} ${recipe_ingredients} ${video_recipe_link} ${recipe_description}`
		);
		var newRecipeData = {
			profile_id: profile_id,
			diet: diet,
			images: images,
			recipe_ingredients: recipe_ingredients,
			video_recipe_link: video,
			recipe_description: description
		};
		console.log(`This is the object ${newRecipeData.name}`);
		let success = await actions.createContact(newRecipeData);
		if (success) {
			history.push("/");
		} else {
			window.alert("Something went wrong, check your input and try again.");
		}
	}
	const [profile_id, setProfile_id] = useState("");
	const [diet, setDiet] = useState("");
	const [images, setImages] = useState("");
	const [recipe_ingredients, setRecipe_ingredients] = useState("");
	const [video_recipe_link, setRecipe_video_link] = useState("");
	const [recipe_description, setRecipe_description] = useState("");
	var history = useHistory();
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add your Recipe</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>User</label>
						<input
							type="text"
							className="form-control"
							placeholder="Restaurant Name"
							value={profile_id}
							onChange={event => setProfile_id(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Diet</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={diet}
							onChange={event => setDiet(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Images</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={images}
							onChange={event => setImages(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Ingredients</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={recipe_ingredients}
							onChange={event => setRecipe_ingredients(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Video</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={video_recipe_link}
							onChange={event => setVideo_recipe_link(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input
							type="email"
							className="form-control"
							placeholder="www.example.com"
							value={recipe_description}
							onChange={event => setRecipe_description(event.target.value)}
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
	);
};
