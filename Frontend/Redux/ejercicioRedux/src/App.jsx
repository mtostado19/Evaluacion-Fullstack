import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './features/auth/authSlice'


function App() {

  const { isAuth, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const onLogin = () => {
    // usuario falso para pruebas
    const username = {
      username: "Miguel",
      password: "1234"
    }
    dispatch(login(username))
  }

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <>
    { !isAuth ? (
      <div>
        <button onClick={onLogin}>Login</button>
      </div>

    ) : (
      <div>
        <div>
          usuario en linea: {user.username}
        </div>
        <button onClick={onLogout}>Logout</button>
      </div>
    )}
    </>
  )
}

export default App
