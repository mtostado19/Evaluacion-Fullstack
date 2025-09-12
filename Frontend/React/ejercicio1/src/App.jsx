import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [search, setSearch] = useState()
  const [arr, setArr] = useState([{"nombre": "miguel", "email": "test@gmail.com"}, {"nombre": "TEST", "email": "test@hotmail.com"}])
  console.log(search)


  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
      </div>

      <div>
        {arr.map((e) => (
          <div>
            {e.nombre}
            {e.email}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
