import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from "../../redux/types"

const initialPayload = {
    username: "",
    password: ""
}

function Login() {

    const [loginPayload, setLoginPayload] = useState(initialPayload)
    const {loginReducer} = useSelector((state) => state)
    const dispatch = useDispatch()

    function handleFormLogin(e){
        let {name, value} = e.target
        setLoginPayload({...loginPayload, [name]: value})
    }

    async function handleLogin(){
        console.log("hit")
        dispatch({
            type: TYPES.LOGIN_USER_LOADING,
            payload: {
                isLoading: true
            }
        })

        try {
            const response = await axios.post('https://api.mudoapi.tech/login', loginPayload)
            dispatch({
                type: TYPES.LOGIN_USER_SUCCESS,
                payload: {
                    loginMessage: response.data.message,
                    isLogin: true,
                    isLoading: false
                }
            })
        } catch (error){
            dispatch({
                type: TYPES.LOGIN_USER_FAILED,
                payload: {
                    loginMessage: error.response.data.message,
                    isLogin: false,
                    isLoading: false
                }
            })
        }
    }


    return (
        <>
            {
                (loginReducer.loginMessage != "") ? (
                    <Alert variant={'danger'}>
                        {loginReducer.loginMessage}
                    </Alert>
                ) : null
                
            }

            <Form className="col-2 m-auto mt-5">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Enter username" onChange={handleFormLogin} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handleFormLogin}/>
                </Form.Group>
                <Button variant="primary" onClick={handleLogin} disabled={loginReducer.isLoading}>
                   Submit
                </Button>
            </Form>
        </>
    )
}

export default Login