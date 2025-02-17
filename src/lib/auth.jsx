import React from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from './firebase'
import { useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const AuthContext = React.createContext()

function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [loggedUser, setLoggedUser] = React.useState(null)

  // Create user with email and password
  const signUpUser = (email, password, nickname) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoggedUser(userCredential)
        registerDocUser(userCredential.user.uid, nickname)
        navigate('/wall')
      })
      .catch(() => {
        throw new Error()
      })
  }

  // Create User Document in Firestore.
  const registerDocUser = async (uid, nickname) => {
    await setDoc(doc(db, 'Users', uid), {
      name: nickname,
    })
  }

  // Login with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoggedUser(userCredential)
        navigate('/wall')
      })
      .catch(() => {
        throw new Error()
      })
  }

  // Create user with Google
  const loginUserGoogle = async () => {
    const provider = new GoogleAuthProvider()
    setLoggedUser(await signInWithPopup(auth, provider))
    navigate('/wall')
  }

  // LogOut User
  const logoutUser = () => {
    signOut(auth)
    setLoggedUser(null)
    navigate('/')
  }

  const authUser = { loggedUser, signUpUser, loginUser, loginUserGoogle, logoutUser }

  return <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
}

function useAuth() {
  const authContext = React.useContext(AuthContext)
  return authContext
}

AuthProvider.propTypes = {
  children: PropTypes.object,
}

export { AuthProvider, useAuth }
