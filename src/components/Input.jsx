import { React } from 'react'
import { PropTypes } from 'prop-types'

function Input(props) {
  return (
    <input
      className='inputForms flex w-96 m-4 p-3.5 text-2xl bg-slate-100 border-b border-gray-500 pb-2 focus:outline-none'
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
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
}

export { Input }
