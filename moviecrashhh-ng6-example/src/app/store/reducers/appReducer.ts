import { ACTION_LOGOUT, ACTION_LOGIN, ACTION_LISTING } from '../action/appAction';

export interface appReducerState {
	login: boolean,
	account: any,
	listing: boolean,
}

const initialState: appReducerState = {
	login: false,
	account: {},
	listing: false,
	// ...
}

export function reducer(state = initialState, action): appReducerState {
	switch (action.type) {
		case ACTION_LOGIN:
			console.log('YEAH');
			return {
				...state,
				login: true,
				account: action.account
			}
		case ACTION_LOGOUT:
			return {
				...state,
				login: false,
				account: action.account
			}
		case ACTION_LISTING:
			return {
				...state,
				listing: false,
			}

	}
	return state;
}
