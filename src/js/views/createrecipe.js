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
	// async function handleSubmit(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	console.log(`submit here ${diet} ${images} ${recipeIngredients} ${videoRecipeLink} ${recipeDescription}`);
	// 	var newRecipeData = {
	// 		diet: diet,
	// 		images: images,
	// 		recipe_ingredients: recipeIngredients,
	// 		video_recipe_link: videoRecipeLink,
	// 		recipe_description: recipeDescription,
	// 		profile_id: 1
	// 	};
	// 	console.log(`This is the object ${newRecipeData}`);
	// 	let success = await actions.createRecipe(newRecipeData);
	// 	if (success) {
	// 		history.push("/");
	// 	} else {
	// 		window.alert("Something went wrong, check your input and try again.");
	// 	}
	// }

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add your Recipe</h1>
				{/* <form>onSubmit={handleSubmit} */}
				<form>
					<div className="form-group">
						<h4>Name of the dish:</h4>
						<input
							type="text"
							className="form-control"
							placeholder="Name your creation!"
							value={diet}
							onChange={event => setDiet(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<h4>Upload a photo:</h4>
						<input
							type="text"
							className="form-control"
							placeholder="Example.."
							value={images}
							onChange={event => setImages(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<h4>Ingredients:</h4>
						<textarea
							className="form-control"
							rows="5"
							type="text"
							placeholder="Enter ingredients used"
							value={recipeIngredients}
							onChange={event => setRecipeIngredients(event.target.value)}
						/>
					</div>
					{/* <div className="form-group">
						<label>Video</label>
						<input
							type="text"
							className="form-control"
							placeholder="Browse..."
							value={videoRecipeLink}
							onChange={event => setVideoRecipeLink(event.target.value)}
						/>
					</div> */}
					<div className="form-group">
						<h4>Description:</h4>
						<textarea
							className="form-control"
							rows="5"
							type="text"
							placeholder="Please describe your steps"
							value={recipeDescription}
							onChange={event => setRecipeDescription(event.target.value)}
						/>
					</div>

					<Link className="mt-3 w-100 text-center" to="/communityrecipes">
						<button
							onClick={() =>
								actions.createRecipe(
									diet,
									images,
									recipeIngredients,
									videoRecipeLink,
									recipeDescription
								)
							}
							className="btn btn-success form-control"
							type="button">
							Save
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
