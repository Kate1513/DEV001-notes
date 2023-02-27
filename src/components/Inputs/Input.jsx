import { React } from 'react'
import { PropTypes } from 'prop-types'
import './input.css'

function Input(props, { value }) {
  return <input className='inputForms' placeholder={props.placeholder} value={value}></input>
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export { Input }
