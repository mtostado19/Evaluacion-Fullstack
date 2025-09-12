import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import { getAllUsers } from './services/apiUsers'


function App() {

  const [search, setSearch] = useState('')
  const [arr, setArr] = useState([])

  useEffect(() => {
    async function load() {
      const res = await getAllUsers()
      setArr(res.data)
    }
    load()
  }, [])

  return (
    <>
      <div className='search-bar-title'>
        Buscador
      </div>
      <div className='search-bar'>
        <input id={'id_bar'} type="text" onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <UserList arr={arr} search={search}></UserList>
    </>
  )
}

export default App
