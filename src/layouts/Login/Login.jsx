import React from 'react'
import { Input } from '../../components/Inputs/Input'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Buttons'

function Login(user, password) {
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
        <img src='../../assets/images/login-img.png' />
        <Input value={user} placeholder='Ingresa tu usuario' />
        <Input value={password} placeholder='Ingresa tu contraseña' />
        <Button onClick={goLogin}>Iniciar sesion</Button>
        <Button>Iniciar sesion con Google</Button>
        <h1>No tienes una cuenta?</h1>
        <button onClick={goSignUp}>Registrate</button>
      </main>
    </>
  )
}
export { Login }
