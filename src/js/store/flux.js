// const backendUrl = "https://3000-c340f1e8-1798-4b26-832d-8713dea868db.ws-us02.gitpod.io/";
const backendUrl = "https://3000-c340f1e8-1798-4b26-832d-8713dea868db.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			currentUser: null,
			recipe: [],
			restaurants: [],
			searchResults: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		address: "full address",
			// 		pricing: "money",
			// 		hours: "operating hours"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			search: restaurantToSearch => {
				const store = getStore();
				let searchedRestaurant = store.restaurants.filter(item =>
					item.name.toLowerCase().includes(restaurantToSearch.toLowerCase())
				);
				setStore({ searchResults: searchedRestaurant });
			},
			loadRestaurants: () => {
				const store = getStore();
				fetch(`${backendUrl}restaurant`, {
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ restaurants: data }))
					.catch(error => console.log(error));
			},
			loadRecipes: () => {
				const store = getStore();
				fetch(`${backendUrl}recipe`, {
					headers: {
						"Content-type": "application/json"
						// Authorization: `Bearer ${store.token}`
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ recipe: data }))
					.catch(error => console.log(error));
			},
			createRecipe: (a, b, c, d, e) => {
				const store = getStore();
				fetch(`${backendUrl}recipe`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${store.token}`
					},

					body: JSON.stringify({
						images: "https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg", // when you want replace this string with b without ""
						diet: a,
						video_recipe_link: d,
						recipe_ingredients: c,
						recipe_description: e,
						profile_id: store.currentUser.id
					})
				})
					.then(response => {
						if (response.ok) {
							return true;
						} else {
							return false;
						}
					})
					.then(() => getActions().loadRecipes());
			},
			addRestaurant: (param1, param2, param3, param4, param5, param6, param7, param8) => {
				fetch(`${backendUrl}restaurant`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},

					body: JSON.stringify({
						name: param1,
						diet: param2,
						address: param3,
						email: param4,
						phone_number: param5,
						operational_hours: param6,
						pricing: param7,
						website: param8
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							//Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt });
						}
					});
			},
			login: (parameter1, parameter2) => {
				fetch(`${backendUrl}login`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},

					body: JSON.stringify({
						email: parameter1,
						password: parameter2
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							//Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, currentUser: token.user });
						}
					});
			},
			logout: () => {
				setStore({ token: null });
			},
			createContact: async newContactData => {
				const actions = getActions();
				newContactData["agenda_slug"] = "kev32";
				let response = await fetch(backendUrl + "profile", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContactData)
				});
				if (!response.ok) {
					return false;
				}
				// await actions.getContacts();
				return true;
			},
			loadProfile: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch(backendUrl + "profile")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ profile: data }))
					.catch(error => console.log(error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
