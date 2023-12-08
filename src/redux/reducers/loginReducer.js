import { TYPES } from "../types"

const loginState = {
    loginMessage: "",
    isLogin: false,
    isLoading: false
}

const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case TYPES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginMessage: action.payload.loginMessage,
                isLogin: action.payload.isLogin,
                isLoading: action.payload.isLoading
            }
        case TYPES.LOGIN_USER_FAILED:
            return {
                    ...state,
                    loginMessage: action.payload.loginMessage,
                    isLogin: action.payload.isLogin,
                    isLoading: action.payload.isLoading
                }  
        case TYPES.LOGIN_USER_LOADING:
            return {
                    ...state,
                    isLoading: action.payload.isLoading
                }         
        default:
            return state    

    }
}


export default loginReducer