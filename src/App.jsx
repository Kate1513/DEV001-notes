import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from './layouts/Pages/Login'
import { SignUp } from './layouts/Pages/SignUp'
import { WallNotes } from './layouts/WallNotes/WallNotes'
import { PageNotFound } from './layouts/Pages/notFound'
import { AuthProvider } from './lib/auth'
import { ProtectedRoute, PublicOnly } from './Routes'
import { ModalProvider } from './components/Modal'

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
                  <ModalProvider>
                    <Login />
                  </ModalProvider>
                </PublicOnly>
              }
            />
            <Route
              path='/signup'
              element={
                <ModalProvider>
                  <SignUp />
                </ModalProvider>
              }
            />
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
