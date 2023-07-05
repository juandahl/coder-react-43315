import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [contador, setContador] = useState(0);

  const handleReducir = () => {
    setContador(contador - 1);
  }

  const handleincrementar = () => {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <h1>Nuestro contador: {contador}</h1>
        
      <Button variant="success" onClick={handleReducir}>Reducir</Button>
      <Button onClick={handleincrementar}>Incrementar</Button>
    </div>
  );
}

export default App;
