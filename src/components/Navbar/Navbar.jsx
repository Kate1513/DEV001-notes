import React from 'react'
import ImageLogin from '../../assets/images/logo-notes.png'
import { useAuth } from '../../lib/auth'
import './navbar.css'

function Navbar() {
  const auth = useAuth()
  return (
    <section className='icon-Logo'>
      <h3>{auth.loggedUser.user.name}</h3>
      <img src={ImageLogin} className='image-Logo' />
    </section>
  )
}

export { Navbar }
