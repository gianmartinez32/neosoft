import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from '../components/Books/Books'
import BoxLogin from '../components/BoxLogin/BoxLogin'
import Header from '../components/Header'
import Inicio from '../views/Inicio/Inicio'
import Login from '../views/Login/Login'

export const AppRouter = () => {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/Login' element={ <Login />}></Route>
            <Route path='/Libros' element={ <Books />}></Route>
        </Routes>

    </div>
  )
}
