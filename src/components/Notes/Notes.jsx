import React from 'react'
import { PropTypes } from 'prop-types'
import deleteIcon from '../../assets/images/trash-icon.png'
import editIcon from '../../assets/images/edit-icon.svg'
import './notes.css'

function NoteList(props) {
  return (
    <section className='container'>
      <ul className='container-notes'>{props.children}</ul>
    </section>
  )
}

function NoteItem(props) {
  const editNote = () => {
    alert('editar nota')
  }
  const deleteNote = () => {
    alert('Borraste la nota')
  }
  return (
    <section className='print-note'>
      <li className='note-Item'>
        <p className='note-Title'>{props.title}</p>
        <hr />
        <p className='note-Content'>{props.text}</p>
        <section className='note-footer'>
          <img src={editIcon} alt='Edit Icon' className='editIcon' onClick={editNote} />
          <img src={deleteIcon} alt='Delete Icon' className='deleteIcon' onClick={deleteNote} />
        </section>
      </li>
    </section>
  )
}

NoteList.propTypes = {
  children: PropTypes.array.isRequired,
}

NoteItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export { NoteList, NoteItem }
