import React, { useState } from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Buttons'
import ImageLogin from '../../assets/images/login-img.png'
import Logo from '../../assets/images/logo-notes.png'
import IconG from '../../assets/images/icon-Google.png'
import { useAuth } from '../../lib/auth'
import { Alerts } from '../../components/Modals/Modal'

function Login() {
  const navigate = useNavigate()

  const goSignUp = () => {
    navigate('/signup')
  }

  const auth = useAuth()

  const signIn = (e) => {
    e.preventDefault()
    auth.loginUser(email, password)
  }

  const signInGoogle = (e) => {
    e.preventDefault()
    auth.loginUserGoogle()
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <main>
        <form>
          <section className='image-login'>
            <img src={ImageLogin} className='image-L' />
          </section>
          <section className='login-content'>
            <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo' />
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
            <Button onClick={signIn}>Iniciar sesion</Button>
            <Button onClick={signInGoogle}>
              <img src={IconG} className='icon-Google' />
              Iniciar sesion con Google
            </Button>
            <h3>
              ¿No tienes una cuenta?&nbsp;
              <a onClick={goSignUp} className='register'>
                Registrate
              </a>
            </h3>
          </section>
        </form>
      </main>
      <Alerts id='modalError' value='error' />
    </>
  )
}
export { Login }
