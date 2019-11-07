const defaultState = {
	user: {
		name: "Unknown",
		age: 20
	},
	fetching: false,
	fetched: false,
	error: null
}

const userReducer = (state = defaultState, action) => {
	switch(action.type) {
		case "FETCH_USER": {
			return {...state, fetching: true}
		}

		case "FETCH_USER_REJECTED": {
			return {...state, fetching: false, error: action.payload}
		}

		case  "FETCH_USER_FULFILLED": {
			return {...state, 
				fetching: false, 
				fetched: true,
				user: action.payload
			}
		}
		case "SET_USER": {
			return {...state, user: {...state.user, name: action.payload.name}}
		}
		case "SET_AGE": {
			return {...state, user: {...state.user, age: action.payload.age}}
		}

		default: 
			return state;
	}
}

export default userReducer;