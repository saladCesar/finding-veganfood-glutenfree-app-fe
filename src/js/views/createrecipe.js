import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateRecipe = () => {
	const { store, actions } = useContext(Context);
	const [diet, setDiet] = useState("");
	const [images, setImages] = useState("");
	const [recipeIngredients, setRecipeIngredients] = useState("");
	const [videoRecipeLink, setVideoRecipeLink] = useState("");
	const [recipeDescription, setRecipeDescription] = useState("");
	var history = useHistory();
	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(`submit here ${diet} ${images} ${recipeIngredients} ${videoRecipeLink} ${recipeDescription}`);
		var newRecipeData = {
			diet: diet,
			images: images,
			recipe_ingredients: recipeIngredients,
			video_recipe_link: videoRecipeLink,
			recipe_description: recipeDescription
		};
		console.log(`This is the object ${newRecipeData.name}`);
		let success = await actions.createRecipe(newRecipeData);
		if (success) {
			history.push("/");
		} else {
			window.alert("Something went wrong, check your input and try again.");
		}
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add your Recipe</h1>
				<form onSubmit={handleSubmit}>
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
					<div className="form-group">
						<label>Images</label>
						<input
							type="text"
							className="form-control"
							placeholder="Browse.."
							value={images}
							onChange={event => setImages(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Ingredients</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter ingredients"
							value={recipeIngredients}
							onChange={event => setRecipeIngredients(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Video</label>
						<input
							type="text"
							className="form-control"
							placeholder="Browse..."
							value={videoRecipeLink}
							onChange={event => setVideoRecipeLink(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input
							type="text"
							className="form-control"
							placeholder="description of the recipe"
							value={recipeDescription}
							onChange={event => setRecipeDescription(event.target.value)}
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
