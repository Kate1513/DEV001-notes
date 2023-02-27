import React from 'react'
import './buttons.css'

function Button(text) {
  return <button className='buttonStyle'>{text.content}</button>
}
export { Button }
