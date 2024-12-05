import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import CustomForm from './assets/components/customForm'
import CustomTable from './assets/components/customTable'


// Main application component
function App() {

  return (
    <div>
      <nav>
        <Link to='/' className="nav-link">Custom Table</Link>
        <Link to='form' className="nav-link">Custom Form</Link>
      </nav>
      <Routes>
        <Route path='/' element={<CustomTable/>}></Route>
        <Route path='/form' element={<CustomForm/>}></Route>
      </Routes>
    </div>
  )
}

export default App
