import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

      <div>
        {arr.filter((data) => {
          if (search === '') return data

          const regex = new RegExp('^' + search, 'i')
          return regex.test(data.nombre)
        })
        .map((data) => (
          <div key={data.id}>
            {data.nombre}
            {data.email}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
