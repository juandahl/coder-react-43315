const estudiantes = [{ id: 1, nombre: "juan", nota: 5 },
                    { id: 2, nombre: "juan", nota: 8 },
                    { id: 3, nombre: "jose", nota: 9 }];

function transformarEstudiante(estudiante) {
  return estudiante.nombre;
}

const result = estudiantes.map(transformarEstudiante);
const result2 = estudiantes.map((estudiante) => estudiante.nombre);

// Filter
function checkFilter(estudiante) {
  return estudiante.nota < 7;
}

const desaprobados = estudiantes.filter(checkFilter);
const nombresDesaprobados = desaprobados.map(transformarEstudiante);


const estudianteId4 = estudiantes.filter((estudiante) => (estudiante.id === 4));

// console.log(estudianteId4[0]);

// Find
const estudianteId1 = estudiantes.find((estudiante) => (estudiante.id === 1));

// console.log(estudianteId1);

const estudianteNombre = estudiantes.find((estudiante) => (estudiante.nombre === "juan"));

// console.log(estudianteId1);


const primerDesaprobado = estudiantes.find(checkFilter);
console.log(primerDesaprobado);

