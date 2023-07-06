import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Card({ titulo = "Titulo", onClick }) {
  const [contador, setContador] = useState(0);

  function handleChange() {
    setContador(contador + 1);
    onClick();
  }

  return (
    <div style={{ display: "flex", paddingTop: 20, justifyContent: "space-around", gap: 40 }}>
      <div>{titulo}</div>
      <div>Cantidad de clicks: {contador}</div>
      <Button onClick={handleChange}>Agregar</Button>
    </div>
  )
}

export default Card;