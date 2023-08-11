import { useState } from 'react';
import './App.css';
import { useContador } from './hooks/useContador';

function App() {
  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);  
  }

  function decrement() {
    setContador(contador - 1);
  }

  return (
    <div className="App">
      Contador: {contador}

      <button onClick={decrement}>Restar</button>
      <button onClick={increment}>Sumar</button>
    </div>
  );
}

export default App;
