import React, { useState } from 'react';
import List from './components/List/List';
import StudentForm from './components/StudentForm/StudentForm';

// Ruta al archivo CSS externo
import './styles.css'; 

const defaultStudents = [
  { name: 'John', grade: 10 },
  { name: 'Michael', grade: 2 },
  { name: 'Peter', grade: 8 },
  { name: 'Kate', grade: 4 },
];

const MIN_GRADE = 7;

const App = () => {
  const [students, setStudents] = useState(defaultStudents);

  function addStudent(student) {
    if (student) {
      students.push(student);

      setStudents([...students]);
    }
  };

  function getSortStudents() {
    const result = [...students.sort((a, b) => Number(a.grade) < Number(b.grade) ? 1 : -1)];

    return result;
  };

  function sortStudents() {
    setStudents(getSortStudents());
  };

  // TODO: Retornar la cantidad de estudiantes aprobados
  const getCantidadAlumnosAprobados = () => {
    let aprobados = 0;
    students.forEach(student => {
      aprobados = student.grade >= MIN_GRADE ? aprobados + 1 : aprobados;
    });

    return aprobados;
  };

  // TODO: Retornar la cantidad de estudiantes desaprobados
  const getCantidadAlumnosDesaprobados = () => {
    let desaprobados = 0;
    students.forEach(student => {
      if (student.grade < MIN_GRADE) {
        desaprobados++;
      }
    });

    return desaprobados;
  };

  // TODO: Buscar el estudiante con mayor nota
  const getBestStudent = () => {
    const ordenados = getSortStudents();

    const [best] = ordenados;

    return best.name;
  };

  const studentsApproved = students.filter(student => student.grade >= MIN_GRADE);
  const studentsDesapproved = students.filter(student => student.grade < MIN_GRADE);

  return (
    <div>
      <h1 className="header">App de curso</h1>
      <StudentForm onAddStudent={addStudent} onSortStudent={sortStudents} />

      {/* LISTA DE ALUMNOS */}
      <h2 className="header">Lista de Alumnos: {students.length}</h2>
      <List students={students} />

      {/* LISTA DE ALUMNOS APROBADOS */}
      <h2 className="header">Lista de Alumnos Aprobados: {getCantidadAlumnosAprobados()}</h2>
      <List students={studentsApproved} />


      {/* LISTA DE ALUMNOS DESAPROBADOS */}
      <h2 className="header">Lista de Alumnos Desaprobados: {getCantidadAlumnosDesaprobados()}</h2>
      <List students={studentsDesapproved} />

      <h2 className="header">Mejor Nota: {getBestStudent()}</h2>
    </div>
  );
};

export default App;
