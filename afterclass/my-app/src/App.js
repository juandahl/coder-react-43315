import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from "./components/Card";

import './App.css';

function App() {
  const [contadorGlobal, setContadorGlobal] = useState(0);

  const handleChangeGlobal = () => {
    setContadorGlobal(contadorGlobal + 1);
  }

  return (
    <div className='root'>
      <h2>Cantidad de clicks totales: {contadorGlobal}</h2>
      <div className='card-container'>
        <Card titulo='Mi primer card' onClick={handleChangeGlobal} />
        <Card titulo='Mi segunda card' onClick={handleChangeGlobal} />
        <Card titulo='Mi tercer card' onClick={handleChangeGlobal} />
        <Card onClick={handleChangeGlobal} />
      </div>

      <Button>Confirmar</Button>
    </div>
  );
}

export default App;
