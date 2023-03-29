import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons'
import ImageLogin from '../../assets/images/login-img.png'
import Logo from '../../assets/images/logo-notes.png'
import IconG from '../../assets/images/icon-Google.png'
import Warning from '../../assets/images/Warning.png'
import { useAuth } from '../../lib/auth'
import { Alerts, useModalContext } from '../../components/Modal'

function Login() {
  const navigate = useNavigate()
  const auth = useAuth()
  const modalContext = useModalContext()

  const goSignUp = () => {
    navigate('/signup')
  }

  const signIn = (e) => {
    e.preventDefault()
    auth.loginUser(email, password).catch(() => {
      modalContext.showModal()
    })
  }

  const signInGoogle = (e) => {
    e.preventDefault()
    auth.loginUserGoogle()
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <main className='justify-center min-h-screen mx-40'>
        <form className='flex items-center'>
          <section className='image-login '>
            <img src={ImageLogin} className='image-L hidden md:block w-4/5 ' />
          </section>
          <section className='flex flex-col max-w-lg items-center bg-slate-100 rounded-xl'>
            <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo my-8 mx-0 w-8/12' />
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
            <Button type='submit' onClick={signIn}>
              Iniciar sesion
            </Button>
            <Button onClick={signInGoogle}>
              <img src={IconG} className='icon-Google w-8 mr-2' />
              Iniciar sesion con Google
            </Button>
            <h3 className='mt-8 mb-12 text-2xl'>
              ¿No tienes una cuenta?&nbsp;
              <a onClick={goSignUp} className='register text-blue-700 font-bold underline cursor-pointer'>
                Registrate
              </a>
            </h3>
          </section>
        </form>
      </main>

      {!!modalContext.openModal && (
        <Alerts>
          <div
            className='alertDialog fixed inset-0 flex items-center justify-center flex-col p-16 text-center text-3xl bg-white border-0 rounded-xl sm:w-2/4 sm:h-3/5 md:w-1/4 md:h-1/3'
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <img src={Warning} className='warning-icon w-1/3 m-4' />
            <p className='my-4'>¡Error!</p>
            <p className='msg-user'>Credenciales incorrectas</p>
            <div className='modalBtn mb-2'>
              <button
                className='closeBtn flex m-8 p-4 text-center text-2xl text-teal-50 rounded-lg bg-indigo-500 shadow-md hover:shadow-lg'
                onClick={() => modalContext.closeModal()}
              >
                Aceptar
              </button>
            </div>
          </div>
        </Alerts>
      )}
    </>
  )
}
export { Login }
