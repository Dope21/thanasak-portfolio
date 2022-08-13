import { useState } from 'react'

export const Input = ({ type, name, holder, onChange, value }) => {
  const [focus, setFocus] = useState(false)
  const focusActive = state => {
    setFocus(state)
  }
  return (
    <>
      <label htmlFor={name} className="hidden">
        {holder}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={holder}
        onChange={onChange}
        value={value}
        onFocus={() => focusActive(true)}
        onBlur={() => focusActive(false)}
        className={`input input-color ${
          focus ? 'border-black dark:border-white' : ''
        }`}
      />
    </>
  )
}
export const Area = ({ name, holder, onChange, value }) => {
  const [focus, setFocus] = useState(false)
  const focusActive = state => {
    setFocus(state)
  }
  return (
    <textarea
      required
      name={name}
      id={name}
      placeholder={holder}
      onChange={onChange}
      value={value}
      onFocus={() => focusActive(true)}
      onBlur={() => focusActive(false)}
      className={`input input-color  min-h-[105px] ${
        focus ? 'border-black dark:border-white' : ''
      }`}
    ></textarea>
  )
}
