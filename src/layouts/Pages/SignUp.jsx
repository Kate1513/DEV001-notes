import React, { useState } from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { Button } from '../../components/Buttons/Buttons'
import Logo from '../../assets/images/logo-notes.png'
import { useAuth } from '../../lib/auth'
import EyeIcon from '../../assets/images/eye-regular.svg'
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

  const [showPassword, setShowPassword] = useState(false)
  const passwordVisibility = () => setShowPassword(!showPassword)
  const iconSrc = showPassword ? EyeIcon : EyeIcon
  const iconAlt = showPassword ? 'Hide password' : 'Show password'

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
          <div className='input-container'>
            <label htmlFor='password'></label>
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Ingresa tu contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img src={iconSrc} alt={iconAlt} className='eye-icon' onClick={passwordVisibility} />
          </div>
          <Button onClick={createUser}>Registrarse</Button>
        </section>
      </main>
      <Alerts id='modalError' value='error' />
    </>
  )
}

export { SignUp }
