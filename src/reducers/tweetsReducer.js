
const defaultState = {
	tweets: [],
	fetching: false,
	fetched: false,
	error: null
}

const tweetsReducer = (state = defaultState, action) => {
	switch(action.type) {
		case "FETCH_TWEETS": {
			return {...state, fetching: true}
			break;
		}

		case "FETCH_TWEETS_REJECTED": {
			return {...state, fetching: false, error: action.payload}
			break;	
		}

		case  "FETCH_TWEETS_FULFILLED": {
			return {...state, 
				fetching: false, 
				fetched: true,
				tweets: action.payload
			}
			break;
		}

		default: 
			return state;
	}
}

export default tweetsReducer;