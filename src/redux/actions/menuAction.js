import { GetMenus } from "../../api/menu"

export function getDataMenu(){
    return async (dispatch) => {
        try {
            const menus = await GetMenus()
            console.log(menus)
            dispatch({
                type: "GET_MENU",
                payload: {
                    menuList: menus.data.data.Data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    
}