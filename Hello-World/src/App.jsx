import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ola Mundo</h1>
      <h2>Agora estou no react</h2>
      <br />
      <p>Minha imagem nao entra por nada</p>
    </>
  )
}

export default App
