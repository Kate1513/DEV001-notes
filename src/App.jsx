import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import { Menu } from './Routes'
import { Login } from './layouts/Login/Login'
import { SignUp } from './layouts/SignUp/SignUp'
import { WallNotes } from './layouts/WallNotes/WallNotes'
// import './assets/styles/App.css'

function App() {
  return (
    <>
      {/* <Menu /> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/wall' element={<WallNotes />} />
          <Route path='/*' element={<p>Page Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export { App }
