import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'

function App() {

  const [search, setSearch] = useState('')
  const [arr, setArr] = useState([
    {"id": 1, "nombre": "miguel", "email": "test@gmail.com"},
    {"id": 2, "nombre": "TEST", "email": "test@hotmail.com"},
    {"id": 3, "nombre": "miguel angel", "email": "test@yahoo.com"},
    {"id": 4, "nombre": "miguel copia", "email": "test@outlook.com"},
    {"id": 5, "nombre": "Testo", "email": "test@icloud.com"},
    {"id": 6, "nombre": "Testito", "email": "test@test.com"}
    
  ])

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <UserList arr={arr} search={search}></UserList>
    </>
  )
}

export default App
