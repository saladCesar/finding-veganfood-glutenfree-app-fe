import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron container-fluid">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner m">
						<div className="carousel-item active">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.LYrsGFgMIXTKIX2U30lrqQHaHa%26pid%3DApi&f=1"
								className="d-block w-50%"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3Xv2jWJdAqyPxDP6uXp2qAHaFP%26pid%3DApi&f=1"
								className="d-block height-75%"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ENPnudD6erubROhWVPnZzgHaHa%26pid%3DApi&f=1"
								className="d-block w-50%"
								alt=""
							/>
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
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies vestibulum urna, at
					malesuada nulla condimentum et. Duis sollicitudin porta massa sit amet tempor. Sed feugiat ornare
					ex, ut vestibulum sapien varius ut. Fusce placerat efficitur odio vel scelerisque. Etiam vel
					ullamcorper nibh. Sed tempus eleifend nunc. Ut vestibulum venenatis nisi at venenatis. In molestie
					nec ipsum quis lobortis. Cras sem odio, tempor consequat ultricies sed, commodo vitae tortor.
					Pellentesque ut placerat diam. Sed efficitur luctus leo a elementum. Aenean semper leo in semper
					pretium.
				</p>
				<a classNameName="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</>
	);
};
