import React from 'react'
import { PropTypes } from 'prop-types'
import { NoteList, NoteItem } from '../../components/Notes/Notes'
import { Navbar } from '../../components/Navbar/Navbar'

import { SearchNote } from '../../components/Search/Search'
import LogOutIcon from '../../assets/images/logout-multimedia-ui-svgrepo-com.svg'
// import { logoutUser } from '../../lib/auth'
import './wallNotes.css'
import { useAuth } from '../../lib/auth'

// const notes = [
//   { title: 'Nota 1', text: 'Texto 1' },
//   { title: 'Nota 2', text: 'Texto 2' },
//   { title: 'Nota 3', text: 'Texto 3' },
// ]

function WallNotes(props) {
  const localStorageNotes = localStorage.getItem('Notes_V1')
  let parsedNotes

  if (!localStorageNotes) {
    localStorage.setItem('Notes_V1', JSON.stringify([]))
    parsedNotes = []
  } else {
    parsedNotes = JSON.parse(localStorageNotes)
  }

  const [openModal, setOpenModal] = React.useState(false)
  const [notes, setNotes] = React.useState(parsedNotes)
  const [searchValue, setSearchValue] = React.useState('')
  let searchedNotes = []

  if (!searchValue.length > 0) {
    searchedNotes = notes
  } else {
    searchedNotes = notes.filter((note) => {
      const noteTitle = note.title.toUpperCase()
      const searchTitle = searchValue.toUpperCase()
      return noteTitle.includes(searchTitle)
    })
  }

  const auth = useAuth()

  const logOut = (e) => {
    e.preventDefault()
    auth.logoutUser()
  }

  return (
    <>
      <section className='wall-Page'>
        <header>
          <Navbar />
          <img src={LogOutIcon} alt='Icono para salir de la aplicacion' className='icon-LogOut' onClick={logOut} />
        </header>
        <hr />
        <main>
          <p className='page-title'>Tus notas</p>
          <SearchNote searchValue={searchValue} setSearchValue={setSearchValue} />
          <NoteList>
            {searchedNotes.map((note) => (
              <NoteItem key={note.title} title={note.title} text={note.text} />
            ))}
          </NoteList>
          {}
        </main>
      </section>
    </>
  )
}

WallNotes.propTypes = {
  children: PropTypes.object,
}

export { WallNotes }
