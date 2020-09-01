const backendUrl = "https://3000-daf7f843-ecce-4451-908c-d0076cb8f219.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null
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
			createRecipe: (param1, param2, param3, param4, param5, param6) => {
				fetch(`${backendUrl}communityrecipes`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},

					body: JSON.stringify({
						profile_id: param1,
						diet: param2,
						images: param3,
						recipe_ingredients: param4,
						video_recipe_link: param5,
						recipe_description: param6
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
			addRestaurant: (param1, param2, param3, param4, param5, param6, param7, param8) => {
				fetch(`${backendUrl}restaurants`, {
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
							setStore({ token: token.jwt });
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
