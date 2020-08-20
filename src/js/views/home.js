import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "../component/jumbotron";
import "../../styles/home.scss";
import { Footer } from "../component/footer";
import { Signup } from "../component/signup";

export const Home = () => (
	<>
		<Jumbotron />
		<Signup />
	</>
);
