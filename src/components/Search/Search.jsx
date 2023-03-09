import React from 'react'
import { PropTypes } from 'prop-types'
import './search.css'

function SearchNote({ searchValue, setSearchValue }) {
  const searchNoteValue = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <input
      type='text'
      className='searchNote'
      placeholder='Busca tu nota'
      value={searchValue}
      onChange={searchNoteValue}
    />
  )
}

SearchNote.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
}

export { SearchNote }
