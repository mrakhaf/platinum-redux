import { useSelector } from "react-redux"

function CreateMenu() {
    const state = useSelector((state) => state)

    console.log(state.isAuth)

    return (
        <h1>Ini Create Menu</h1>
    )
}

export default CreateMenu