import { React } from 'react'
import { PropTypes } from 'prop-types'
import './input.css'

function Input(props) {
  return (
    <input
      className='inputForms'
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
      required={props.required}
    ></input>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
  required: PropTypes.any,
}

export { Input }
