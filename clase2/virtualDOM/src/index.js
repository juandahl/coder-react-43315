import React, { useState } from "react";
import TestRenderer from 'react-test-renderer';
import { render } from "react-dom";

const ShowNumber = ({ number, showColor }) => {
  const styles = showColor ? { backgroundColor: "#0e402d", color: "#fff" } : undefined;

  return <p style={styles}>Numero Actual: {number}</p>;
}

const ListItem = ({ item }) => {
  return <li >{item}</li>;
}

const ShowList = ({ list, showColor }) => {
  const styles = showColor ? { backgroundColor: "#5a6650", color: "#fff" } : undefined;

  return (
    <ul style={styles}>
      {list.map(l => <ListItem key={l} item={l} />)}
    </ul>
  );
}

const App = ({ defaultNumber = 0, defaultList = [] }) => {
  const [number, setNumber] = useState(defaultNumber);
  const [list, setList] = useState(defaultList);
  const [printComponents, setPrintComponents] = useState(false);

  const [virtualDOM, setVirtualDOM] = useState('');

  const printNode = () => {
    const testRenderer = TestRenderer.create(<App defaultNumber={number} defaultList={list} />);
    setVirtualDOM(JSON.stringify(testRenderer.toJSON(), undefined, 4));
  }

  return (
    <div style={{ display: 'flex', backgroundColor: printComponents ? "#CCC" : undefined }}>
      <div style={{ flex: 1 }}>
        <div style={{ position: 'sticky', gap: 10, top: 10 }}>
          <button onClick={printNode}>Mostrar Virtual DOM</button>
          <h3>Componentes</h3>
          <button onClick={() => setPrintComponents(prev => !prev)}>Pintar componentes</button>

          <h3>Numeros</h3>
          <button onClick={() => setNumber(old => old + 1)}>Sumar</button>
          <ShowNumber number={number} showColor={printComponents} />


          <h3>List</h3>
          <button onClick={() => setList(old => old.concat(Math.random()))}>Nuevo elemento</button>
          <p>Lista:</p>
          <ShowList list={list} showColor={printComponents} />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <code>
          {virtualDOM}
        </code>
      </div>
    </div>
  );
}

render(
  <App />,
  document.getElementById("root")
);
