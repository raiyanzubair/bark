import * as types from './types';



export const loadingOn = () => {
    return {
        type: types.LOADING_ON
    }
}

export const loadingOff = () => {
    return {
        type: types.LOADING_OFF
    }
}

export const loginUser = (user) => {
    return {
        type: types.LOGIN_USER,
        user
    }
}