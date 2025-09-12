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
    dispatch(login())
  }

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <>
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
    </>
  )
}

export default App
