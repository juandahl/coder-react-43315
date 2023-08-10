import { Link } from "react-router-dom";

const estudiantes = [{id: 1, name: "Juan Perez" }, {id: 2, name: "Maria Perez" }];

function Estudiantes() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
      Lista de estudiantes

      {estudiantes.map(estudiante => (
        <Link key={estudiante.id} to={`/estudiantes/${estudiante.id}`}>{estudiante.name}</Link>
      ))}
    </div>
  );
}

export default Estudiantes;
