import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from ''
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element= {<Home />}>Home</Route>
          <Route path="/about" element= {<About />}>About</Route>
          <Route path="/contacts" element= {<Contacts />}>Contacts</Route>

        


        </Routes>
      
      
      
      </BrowserRouter>
     
    </>
  )
}

export default App
