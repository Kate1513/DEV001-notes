import React, { useState } from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { Button } from '../../components/Buttons/Buttons'
import Logo from '../../assets/images/logo-notes.png'
import { useAuth } from '../../lib/auth'
import { Alerts } from '../../components/Modals/Modal'

function SignUp() {
  const auth = useAuth()

  const createUser = (e) => {
    e.preventDefault()
    auth.signUpUser(email, password, nickname)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  return (
    <>
      <main>
        <section className='login-content'>
          <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo' />
          <h2>Registro de nuevo usuario</h2>
          <Input type='text' placeholder='Ingresa tu nombre' onChange={(e) => setNickname(e.target.value)} required />
          <Input
            type='email'
            name='email'
            placeholder='ejemplo@ejemplo.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='on'
            required
          />
          <Input
            type='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input placeholder='Confirma tu contraseña' required />
          <Button onClick={createUser}>Registrarse</Button>
        </section>
      </main>
      <Alerts id='modalError' value='error' />
    </>
  )
}

export { SignUp }
