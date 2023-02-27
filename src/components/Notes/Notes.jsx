import React from 'react'

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

export { NoteList, NoteItem }
