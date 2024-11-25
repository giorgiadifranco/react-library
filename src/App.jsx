import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Books from './pages/Books.jsx'
import DefaultLayout from './pages/DefaultLayout.jsx'

import './App.css'


function App() {
 

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element= {<Home />}>Home</Route>
            <Route path='/books' element={<Books />}>Books</Route>
            <Route path="/about" element= {<About />}>About</Route>
            <Route path="/contacts" element= {<Contacts />}>Contacts</Route>
          </Route>
        


        </Routes>
      
      
      
      </BrowserRouter>
     
    </>
  )
}

export default App
