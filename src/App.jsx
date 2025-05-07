import { Navbar } from './Components/Navbar'
import { CursorEffect } from './Components/CursorEffect'
import { Home } from './Pages/Home/Home'
import { Pages } from './Pages'

function App() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <Pages />
    </>
  )
}

export default App