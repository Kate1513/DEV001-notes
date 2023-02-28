import React from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Buttons'
import Logo from '../../assets/images/logo-notes.png'
import IconG from '../../assets/images/icon-Google.png'

function SignUp() {
  const navigate = useNavigate()
  const goLogin = () => {
    navigate('/wall')
  }
  return (
    <>
      <main>
        <section className='login-content'>
          <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo' />
          <h2>Registro de nuevo usuario</h2>
          <Input placeholder='Ingresa tu nombre' />
          <Input placeholder='Ingresa tu contraseña' />
          <Input placeholder='Confirma tu contraseña' />
          <Button onClick={goLogin}>Registrarse</Button>
          <Button>
            <img src={IconG} className='icon-Google' />
            Crear sesion con Google
          </Button>
        </section>
      </main>
    </>
  )
}

export { SignUp }
