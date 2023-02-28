import React from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Buttons'
import ImageLogin from '../../assets/images/login-img.png'
import Logo from '../../assets/images/logo-notes.png'
import IconG from '../../assets/images/icon-Google.png'

function Login() {
  const navigate = useNavigate()
  const goLogin = () => {
    navigate('/wall')
  }
  const goSignUp = () => {
    navigate('/signup')
  }
  return (
    <>
      <main>
        <section className='image-login'>
          <img src={ImageLogin} className='image-L' />
        </section>
        <section className='login-content'>
          <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo' />
          <Input placeholder='Ingresa tu usuario' />
          <Input placeholder='Ingresa tu contraseña' />
          <Button onClick={goLogin}>Iniciar sesion</Button>
          <Button>
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
      </main>
    </>
  )
}
export { Login }
