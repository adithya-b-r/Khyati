import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { CursorEffect } from './Components/CursorEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CursorEffect />
      <Navbar />
    </>
  )
}

export default App