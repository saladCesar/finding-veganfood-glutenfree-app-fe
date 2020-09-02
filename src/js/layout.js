import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Education } from "./views/education";
import { Home } from "./views/home";
import { MyAccount } from "./views/myaccount";
import { Single } from "./views/single";
import { Search } from "./views/search";
import { CommunityRecipes } from "./views/communityrecipes";
import { JoinTheCommunity } from "./views/jointhecommunity";
import injectContext from "./store/appContext";

import { Titleandsearch, Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Restaurants } from "./views/restaurants";
import { AddRestaurant } from "./views/addrestaurant";
import { Createprofile } from "./views/createprofile";
import { Login } from "./views/login";
import { CreateRecipe } from "./views/createrecipe";
import { RestaurantPolicy } from "./views/restaurantpolicy";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Titleandsearch />
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/communityrecipes">
						<CommunityRecipes />
					</Route>
					<Route exact path="/search">
						<Search />
					</Route>
					<Route exact path="/single/:theid">
						<Single />
					</Route>
					<Route exact path="/jointhecommunity">
						<JoinTheCommunity />
					</Route>
					<Route exact path="/restaurants">
						<Restaurants />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/addrestaurant">
						<AddRestaurant />
					</Route>
					<Route exact path="/restaurantpolicy">
						<RestaurantPolicy />
					</Route>
					<Route exact path="/education" component={Education}>
						<Education />
					</Route>
					<Route exact path="/createrecipe">
						<CreateRecipe />
					</Route>
					<Route exact path="/createprofile">
						<Createprofile />
					</Route>
					<Route exact path="/myaccount">
						<MyAccount />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
