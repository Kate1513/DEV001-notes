import React from 'react'
import { NoteList, NoteItem } from '../../components/Notes/Notes'

const notes = [{ text: 'Nota 1' }, { text: 'Nota 2' }, { text: 'Nota 3' }]

function WallNotes() {
  return (
    <>
      <p>Pagina de muro de las notas</p>
      <NoteList>
        {notes.map((note) => (
          <NoteItem key={note.text} text={note.text} />
        ))}
      </NoteList>
    </>
  )
}

export { WallNotes }
