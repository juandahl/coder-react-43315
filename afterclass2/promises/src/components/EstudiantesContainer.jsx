import { useEffect, useState } from "react";

import estudiantesDB from  "../data/estudiantes.json";

const getMockStudentsAsync = new Promise((resolve, reject) => { 
  setTimeout(() => {
    if (estudiantesDB.length === 0){
      reject("Upss... Algo salio mal");
    }

    resolve(estudiantesDB);
  }, 3000);
});

function EstudiantesContainer() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMockStudentsAsync
    .then(response => {
      setEstudiantes(response);
    }).catch(err => {
      console.log(err);
      setError(err);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  // const result = [];
  // estudiantes.forEach(estudiante => {
  //   result.push(estudiante.id + " - " + estudiante.name);
  // })

  // const resultMap = estudiantes.map(estudiante => {
  //   return { nombre: estudiante.name };
  // });

  // console.log("foreach", result);
  // console.log("map", resultMap);

  return (
    <div style={{ paddingTop: 140 }}>
      Estudiantes: {estudiantes.length}

      {estudiantes.map(estudiante => (
        <div>{estudiante.name}</div>
      ))}
    </div>
  )
}

export default EstudiantesContainer;
