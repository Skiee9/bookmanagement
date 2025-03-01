import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import MyBooksPage from './pages/MyBooksPage'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/my-books" element={<MyBooksPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
