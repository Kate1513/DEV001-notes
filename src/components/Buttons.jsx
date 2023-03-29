import React from 'react'
import { PropTypes } from 'prop-types'

function Button(props) {
  return (
    <button
      className='flex m-4 p-4 text-center text-2xl rounded-lg bg-gray-300 shadow-xl hover:shadow-lg'
      onClick={props.onClick}
      src={props.Icon}
    >
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
