export const Input = ({ type, name, holder, onChange, value }) => {
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
        className="outline-none rounded-lg px-3 py-2 bg-transparent border-2 border-sub-text-color main-text-color"
      />
    </>
  )
}
export const Area = ({ name, holder, onChange, value }) => {
  return (
    <textarea
      required
      name={name}
      id={name}
      placeholder={holder}
      onChange={onChange}
      value={value}
      className="outline-none rounded-lg px-3 py-2 bg-transparent border-2 border-sub-text-color main-text-color min-h-[105px]"
    ></textarea>
  )
}
