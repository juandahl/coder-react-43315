function Input({ onKeyDown, onChange }) {

  function handleKeyDown(event) {
    onKeyDown(event.keyCode);
  }

  function handleChange(event) {
    onChange(event.target.value);
  }

  return <input onChange={handleChange} onKeyDown={handleKeyDown} />
}

export default Input;