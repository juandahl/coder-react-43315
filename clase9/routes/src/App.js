import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/home";
import NavBar from "./components/navBar";
import Estudiantes from "./components/estudiantes";
import EstudianteDetail from "./components/estudianteDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home title="Esta es la ruta home" />} />
        <Route exact path="/estudiantes" element={<Estudiantes />} />      
        <Route exact path="/estudiantes/:id" element={<EstudianteDetail />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
