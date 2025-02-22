import { useState } from 'react'
import './App.css'
import One from './One'
import Two from './Two'

function App() {
  const [message, setMessage] = useState('')

  return (
    <>
      {message === 'one' && <One />}
      {message === 'two' && <Two />}
      <button onClick={() => setMessage('one')}>One</button>
      <button onClick={() => setMessage('two')}>Two</button>
    </>
  )
}

export default App
