import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getDataMenu } from "../../redux/actions/menuAction"

function Menus() {
    const {menuReducer} = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataMenu())
    }, [])

    return (
        <>
            <h1>Ini Halaman Menus</h1>
            {
                menuReducer.menuList.map((menu, key)=> (
                        <p key={key}>{menu.id} - {menu.name}</p>
                ))
            }
        </>
    )
}

export default Menus