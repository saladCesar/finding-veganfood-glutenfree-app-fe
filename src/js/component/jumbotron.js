import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logowithwelcome from "../../img/home-page/logo-with-welcome.jpg";

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron container-fluid">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner m">
						<div className="carousel-item active">
							<div
								className="image22"
								style={{
									backgroundImage: `url( ${logowithwelcome}
							)`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "800px"
								}}
							/>
							{/* <img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.LYrsGFgMIXTKIX2U30lrqQHaHa%26pid%3DApi&f=1"
								className="d-block w-100%"
								alt=""
							/> */}
						</div>
						<div className="carousel-item">
							<div
								className="image22"
								style={{
									backgroundImage: `url(
								"https://www.ecestaticos.com/image/clipping/74a0e7155ea6d31e964ef715002467b4/039-gluten-free-039-guia-nutricional-para-celiacos-en-el-extranjero.jpg"
							)`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									width: "100%",
									height: "800px"
								}}
							/>
							{/* <img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3Xv2jWJdAqyPxDP6uXp2qAHaFP%26pid%3DApi&f=1"
								className="d-block height-75%"
								alt=""
							/> */}
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>

				<hr classNameName="my-4" />
				<p>{/*  */}</p>
				<a classNameName="btn btn-primary btn-lg" href="#" role="button">
					{/* Learn more */}
				</a>
			</div>
		</>
	);
};
