import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <>
      <p>{show ? 'Mayank' : ''}</p>
      <button onClick={handleClick}>{show ? 'show' : 'hide'}</button>
    </>
  )
}

export default App
