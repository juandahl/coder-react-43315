import { useEffect, useState } from 'react';
import './App.css';

const espejosDeDB = [
  {id: 1,
  name: "Espejo1",
  description: "Espejo retroiluminado",
  stock: 5},

  {id: 2,
    name: "Espejo2",
    description: "Espejo retroiluminado",
    stock: 5},

  {id: 3,
    name: "Espejo3",
    description: "Espejo retroiluminado",
    stock: 5}
];

// Definición
const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(espejosDeDB);
  }, 3000);
})

function App() {
  const [espejos, setEspejos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Componente montado");
    console.log("Comenzar a ejecutar la promesa. Estado pending");

    task.then(espejosDePromesa => {
      console.log("Terminó la promesa. Estado completo");

      setEspejos(espejosDePromesa);
      setLoading(false);
    });

    console.log("sigo con esta tarea");
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>
  }

  return (
    <div className="App">
      Cantidad de espejos: {espejos.length}
      <div>Lista</div>
      <ul>
        {espejos.map(espejo => (
          <li key={espejo.id}>{espejo.name} - {espejo.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
