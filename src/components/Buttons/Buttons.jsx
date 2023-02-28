import React from 'react'
import './buttons.css'
import { PropTypes } from 'prop-types'

function Button(props) {
  return (
    <button className='buttonStyle' onClick={props.onClick} src={props.Icon}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  Icon: PropTypes.any,
  children: PropTypes.any,
}

export { Button }
