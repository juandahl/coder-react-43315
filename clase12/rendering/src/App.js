import { useEffect, useState } from 'react';
import './App.css';
import classNames from "classnames";

// Components
import Button from './components/button';
import Layout from './components/layout';
import Text from './components/text';

const SECONDS = 3 * 1000;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => setIsLoading(false), SECONDS);
  }, []);

  function handleCompletarStep() {
    setStep(step + 1);
  }

  return (
    <Layout isDarkMode={isDarkMode} isLoading={isLoading}>
      <Text isDarkMode={isDarkMode} value={"Bienvenidos"} variant="title" />

      <div className={classNames({ 'color-red': false, 'big-size': true })}>Hola</div>

      {step === 0 && <Text isDarkMode={isDarkMode} value={"Nombre"} />}   
      {step === 1 && <Text isDarkMode={isDarkMode} value={"Apellido"} />}   
      {step === 2 && <Text isDarkMode={isDarkMode} value={"Telefono"} />}   

      <Button onClick={handleCompletarStep}>Completar Step</Button>

      <Button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Cambiar a light" : "Cambiar a dark"}
      </Button>
    </Layout>
  );
}

export default App;
