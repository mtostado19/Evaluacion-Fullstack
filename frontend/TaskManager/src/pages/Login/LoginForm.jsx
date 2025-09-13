import { useState } from "react"
import Button from "../../components/Button"
import { login } from "../../services/auth/auth"
import { useDispatch, useSelector } from 'react-redux'
import { loginReducer, logoutReducer } from "../../features/auth/authSlice"

const LoginForm = () => {

    const { isAuth, user, token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    async function handleLogin() {
        const res = await login({"username": username, "password": password})
        if (res.user !== null) {
            // console.log("Usuario logeado");
            dispatch(loginReducer({"user": res.user, "toker": res.token}))
        }
    }

    return(
        <div>
            <div>
                Username
                <div>
                    <input id='inputUsername' type="text" onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div>
                Password
                <div>
                    <input id='inputPassword' type="text" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div>
                <Button onClick={handleLogin} text={'Login'}></Button>
            </div>

            { !isAuth ? (
                <div>
                    hola
                </div>
            ) : (
                <div>
                    {user.username}
                    {token}
                </div>

            )}
        </div>
    )
}

export default LoginForm