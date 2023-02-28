import { React } from 'react'
import { PropTypes } from 'prop-types'
import './input.css'

function Input(props) {
  return <input className='inputForms' placeholder={props.placeholder}></input>
}

Input.propTypes = {
  placeholder: PropTypes.string,
}

export { Input }
