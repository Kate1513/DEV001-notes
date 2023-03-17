import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from './layouts/Pages/Login'
import { SignUp } from './layouts/Pages/SignUp'
import { WallNotes } from './layouts/WallNotes/WallNotes'
import { PageNotFound } from './layouts/Pages/notFound'
import './assets/styles/App.css'
import { AuthProvider } from './lib/auth'
import { ProtectedRoute, PublicOnly } from './Routes'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route
              path='/'
              element={
                <PublicOnly>
                  <Login />
                </PublicOnly>
              }
            />
            <Route path='/signup' element={<SignUp />} />
            <Route
              path='/wall'
              element={
                <ProtectedRoute>
                  <WallNotes />
                </ProtectedRoute>
              }
            />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export { App }
