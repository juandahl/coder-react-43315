import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [guardo, setGuardo] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("keydown", onKeyDown);

  //   return () => window.removeEventListener("keydown", onKeyDown);
  // }, []);

  function handleClickApp() {
    console.log("handle click App");
  }

  function handleClick(event) {
    event.stopPropagation();
    console.log("handle click boton");
  }

  function handleChange(event) {
    const value = event.target.value;

    setNombre(value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  }

  return (
    <div className="App" onClick={handleClickApp}>
      {guardo && <div>{nombre}</div>}

      <input onKeyDown={handleKeyDown} />
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
}

export default App;
