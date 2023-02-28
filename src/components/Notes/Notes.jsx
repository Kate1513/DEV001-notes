import React from 'react'
import { PropTypes } from 'prop-types'

function NoteList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  )
}

function NoteItem(props) {
  return (
    <li>
      <p>{props.text}</p>
    </li>
  )
}

NoteList.propTypes = {
  children: PropTypes.string.isRequired,
}

NoteItem.propTypes = {
  text: PropTypes.string.isRequired,
}

export { NoteList, NoteItem }
