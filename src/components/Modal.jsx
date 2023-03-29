import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'

const ModalContext = React.createContext()

function Alerts({ children }) {
  return ReactDOM.createPortal(children, document.getElementById('modal'))
}

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false)
  const showModal = () => {
    setOpenModal(true)
    window.modal.showModal()
  }

  const closeModal = () => {
    setOpenModal(false)
    window.modal.close()
  }

  const modalFunctions = {
    openModal,
    setOpenModal,
    showModal,
    closeModal,
  }

  return <ModalContext.Provider value={modalFunctions}>{children}</ModalContext.Provider>
}

function useModalContext() {
  const alertContext = React.useContext(ModalContext)
  return alertContext
}

ModalProvider.propTypes = {
  children: PropTypes.object,
}
export { Alerts, ModalProvider, useModalContext }

// function CreateNoteModal(props) {
//   const createBtn = (msg) => {
//     alert(msg)
//   }
//   return (
//     <button className='createNoteBtn' onClick={() => createBtn('Aqui deberia estar el modal')}>
//       +
//     </button>
//   )
// }
