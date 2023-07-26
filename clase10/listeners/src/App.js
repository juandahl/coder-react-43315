import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/input';

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

  function handleChange(value) {
    setNombre(value);
  }

  function handleKeyDown(keyCode) {
    console.log(keyCode);
    //TODO: terminar
    // const keys = [65, 69, 73, 79, 85];

    // const exists = ;
    // if () {
    //   event.preventDefault();
    // }
  }

  return (
    <div className="App" onClick={handleClickApp}>
      <div>{nombre}</div>

      <Input onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
}

export default App;
