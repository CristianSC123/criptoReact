import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

function App() {
  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data.data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion falló")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {criptos.map(({ name, priceUsd, id}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
