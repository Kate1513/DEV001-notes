import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Buttons'
import Logo from '../../assets/images/logo-notes.png'
import { useAuth } from '../../lib/auth'
import EyeIcon from '../../assets/images/eye-regular.svg'
import EyeCloseIcon from '../../assets/images/eye-regular-close.svg'
import Warning from '../../assets/images/Warning.png'
import { Alerts, useModalContext } from '../../components/Modal'

function SignUp() {
  const auth = useAuth()
  const modalContext = useModalContext()

  const createUser = (e) => {
    e.preventDefault()
    if (!email || !password || !nickname) {
      modalContext.showModal()
    } else {
      auth.signUpUser(email, password, nickname)
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const passwordVisibility = () => setShowPassword(!showPassword)
  const iconSrc = showPassword ? EyeCloseIcon : EyeIcon
  const iconAlt = showPassword ? 'Hide password' : 'Show password'

  return (
    <>
      <main className='justify-center h-screen mx-40'>
        <form>
          <section className='login-content flex flex-col max-w-lg items-center bg-slate-100 rounded-xl'>
            <img src={Logo} alt='Logo de la aplicacion Daily Notes' className='logo my-8 mx-0 w-8/12' />
            <h2 className='text-2xl'>Registro de nuevo usuario</h2>
            <Input type='text' placeholder='Ingresa tu nombre' onChange={(e) => setNickname(e.target.value)} />
            <Input
              type='email'
              name='email'
              placeholder='ejemplo@ejemplo.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='on'
            />
            <div className='input-container flex w-4/5'>
              <label htmlFor='password'></label>
              <Input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Ingresa tu contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img src={iconSrc} alt={iconAlt} className='eye-icon w-8' onClick={passwordVisibility} />
            </div>
            <Button type='submit' onClick={createUser}>
              Registrarse
            </Button>
          </section>
        </form>
      </main>

      {!!modalContext.openModal && (
        <Alerts>
          <dialog
            className='fixed inset-0 flex items-center justify-center flex-col p-16 text-center text-3xl bg-white border-0 rounded-xl sm:w-2/4 sm:h-3/5 md:w-1/4 md:h-1/3'
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <img src={Warning} className='warning-icon w-1/3 m-4' />
            <p className='my-4'>¡Advertencia!</p>
            <p className='msg-user'>Revisa los datos ingresados</p>
            <div className='modalBtn mb-2'>
              <button
                className='closeBtn flex m-8 p-4 text-center text-2xl text-teal-50 rounded-lg bg-indigo-500 shadow-md hover:shadow-lg'
                onClick={() => modalContext.closeModal()}
              >
                Aceptar
              </button>
            </div>
          </dialog>
        </Alerts>
      )}
    </>
  )
}

export { SignUp }
