import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import AddEvent from '../components/AddEvent/AddEvent'
import UpdateEvent from '../components/UpdateEvent/UpdateEvent'
import DeleteEvent from '../components/DeleteEvent/DeleteEvent'
import ViewOrganizer from '../components/ViewOrganizer/ViewOrganizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<AddEvent/>}></Route>
        <Route path='/update' element={<UpdateEvent/>}></Route>
        <Route path='/delete' element={<DeleteEvent/>}></Route>
        <Route path='/view/organizer' element={<ViewOrganizer/>}></Route>
      </Routes>
    </>
  )
}

export default App
