import * as types from '../actions/types';

const initialState = {
    loading: true,
    user: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_ON: {
            return {
                ...state,
                loading: true
            }
        }
        case types.LOADING_OFF: {
            return {
                ...state,
                loading: false
            }
        }
        case types.LOGIN_USER: {
            console.log(action.user);
            return {
                ...state,
                user: action.user
            }
        }
        default: {
            return state;
        }
    }
};