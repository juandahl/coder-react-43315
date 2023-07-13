import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [capital, setCapital] = useState("No sabemos aún");

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/name/espa";
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(countries => {
        const countryInfo = countries[0];
        const capitalName = countryInfo.capital[0];

        setCapital(capitalName);
      });
  }, []);

  return (
    <div className="App">
      La capital es: {capital}
    </div>
  );
}

export default App;
