import { useState } from "react"
import Button from "../../components/Button"
import { login } from "../../services/auth/auth"
import { useDispatch } from 'react-redux'
import { loginReducer } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import './LoginForm.modules.css'

const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    async function handleLogin() {
        const res = await login({"username": username, "password": password})
        if (res.user !== null) {
            dispatch(loginReducer({"user": res.user, "token": res.token}))
            navigate('/board')
        }
    }

    return(
        <div className="form-login">
            <div className="form-login-fields">
                <div className="form-login-labels">
                    Username
                </div>
                <div>
                    <input id='inputUsername' type="text" onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="form-login-labels">
                    Password

                </div>
                <div>
                    <input id='inputPassword' type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="form-btn-login">
                <Button onClick={handleLogin} text={'Login'}></Button>
            </div>
        </div>
    )
}

export default LoginForm