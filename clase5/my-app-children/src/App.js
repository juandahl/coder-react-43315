import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const MAX_CONTADOR = 10;

function App() {
  const [contador, setContador] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (contador > MAX_CONTADOR) {
      setError("Contador superó el maximo");
    }
  }, [contador]);

  function handleChangeContador(){
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <Card titulo="Mi card">
        <div>
          valor del contador: {contador}
        </div>
      </Card>
      <Card titulo="Otra card">
        <button onClick={handleChangeContador}>click me</button>
      </Card>

      <h3>{error}</h3>
    </div>
  );
}

export default App;
