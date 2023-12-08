import { useSelector, useDispatch } from "react-redux"

function Home() {
    const {authReducer} = useSelector((state) => state)
    const dispatch = useDispatch()

    function handleLogin(){
        dispatch({
            type: "LOGIN",
            payload: {
                isAuth: true
            }            
        })
    }

    function handleLogout(){
        dispatch({
            type: "LOGOUT",
            payload: {
                isAuth: false
            }            
        })
    }

    return (
       <>
        <h1>Ini Home</h1>
        {
            authReducer ? <h1>anda sudah login</h1> : <h1>anda belum login</h1>
        }
       </>
    )
}

export default Home