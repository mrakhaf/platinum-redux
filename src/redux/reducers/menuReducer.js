import { TYPES } from "../types"

//Menu
const menuState = {
    list: [
        {
            id: 1,
            name: "soto"
        },
        {
            id: 2,
            name: "nasi goreng"
        }
    ],
    menuList: []
}
const menuReducer = (state = menuState, action) => {
    switch (action.type) {
        case TYPES.GET_MENU:
            return {
                ...state,
                menuList: action.payload.menuList
            }
        default:
            return state    

    }
}


export default menuReducer