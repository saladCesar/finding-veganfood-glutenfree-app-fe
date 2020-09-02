const backendUrl = "https://3000-dbf17fc2-2eec-455c-a222-f45db57b35bb.ws-us02.gitpod.io/";
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
