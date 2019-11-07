export const fetchUser = () => ({
	type: "FETCH_USER_FULFILLED",
	payload: {
		"name": "Jimmy",
		"age": 27
	}
})

export const setUserName = (name) => ({
	type: "SET_USER",
		payload: {
		"name": name,
	}
})

export const setUserAge = (age) => ({
	type: "SET_AGE",
	payload: {
		"age": age
	}
})
