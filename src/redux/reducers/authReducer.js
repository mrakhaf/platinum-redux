import { TYPES } from "../types"


//Auth
const initialState = {
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }
        
        case TYPES.LOGOUT:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }

        default:
            return state    

    }
    // return state
}

export default authReducer