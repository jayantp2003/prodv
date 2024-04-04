import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NavBar from './components/Navbar/Navbar'
import Calender from './components/Calender/Calender'
import Todos from './components/Todos/Todos'
import './App.css'

function App({ theme }) {
  return (
    <div className={`app-container ${theme.darkMode ? 'dark-theme' : 'light-theme'}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(App);