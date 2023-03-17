import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './lib/auth'
import { PropTypes } from 'prop-types'

// Poner mejor nombre (mas descriptivo) a los componentes

const ProtectedRoute = (props) => {
  const auth = useAuth()
  if (!auth.loggedUser) {
    return <Navigate to='/' />
  }
  return props.children
}

const PublicOnly = (props) => {
  const auth = useAuth()
  if (auth.loggedUser) {
    return <Navigate to='/wall' />
  }
  return props.children
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
}
PublicOnly.propTypes = {
  children: PropTypes.object,
}

export { ProtectedRoute, PublicOnly }
