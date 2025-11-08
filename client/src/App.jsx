
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch('server/api/data')
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        setMessage(data.message)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
