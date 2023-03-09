import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import './modal.css'

function CreateNoteModal(props) {
  const createBtn = (msg) => {
    alert(msg)
  }
  return (
    <button className='createNoteBtn' onClick={createBtn}>
      +
    </button>
  )
}

function Alerts(props) {
  const [isOpen, setIsOpen] = useState(true)

  function CloseAlerts() {
    setIsOpen(false)
  }
  return (
    <dialog className='alertDialog' id={props.id}>
      <p>Advertencia</p>
      <h2> {props.value} </h2>
      <p className='msg-user'>Datos de inicio de sesion incorrectos</p>
      <div className='modalBtn'>
        <button className='closeBtn' onClick={CloseAlerts}>
          Aceptar
        </button>
      </div>
    </dialog>
  )
}

Alerts.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
}
export { CreateNoteModal, Alerts }
