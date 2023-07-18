import './App.css';
import useContador from './hooks/useContador';

function App() {
  const {
    contador: contador1,
    handleIncrease: handleIncrease1,
    handleDecrease: handleDecrease1
   } = useContador();
  const {
    handleIncrease: handleIncrease2,
    handleDecrease: handleDecrease2,
    contador: contador2,
  } = useContador();
 

  return (
    <div className='App'>
      <div>Contador: {contador1}</div>
      <button onClick={handleIncrease1}>Aumentar</button>
      <button onClick={handleDecrease1}>Reducir</button>

      <div>Contador: {contador2}</div>
      <button onClick={handleIncrease2}>Aumentar</button>
      <button onClick={handleDecrease2}>Reducir</button>
    </div>
  );
}

export default App;
