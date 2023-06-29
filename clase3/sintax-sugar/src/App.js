import React, { useState } from 'react';
// Ruta al archivo CSS externo
import './styles.css'; 

const defaultStudents = [
  { name: 'John', grade: 10 },
  { name: 'Michael', grade: 2 },
  { name: 'Peter', grade: 8 },
  { name: 'Kate', grade: 4 },
];

const App = () => {
  const [students, setStudents] = useState(defaultStudents);
  const [newStudent, setNewStudent] = useState('');
  const [newGrade, setNewGrade] = useState('');

  function handleStudentChange (event) {
    setNewStudent(event.target.value);
  };

  function handleGradeChange(event) {
    setNewGrade(event.target.value);
  };

  function addStudent() {
    if (newStudent && newGrade) {
      const student = {};
      student.name = newStudent;
      student.grade = newGrade;

      students.push(student);

      setStudents(students);
      setNewStudent('');
      setNewGrade('');
    }
  };

  function getSortStudents() {
    const result = [...students.sort((a, b) => Number(a.grade) < Number(b.grade) ? 1 : -1)];

    return result;
  };

  function sortStudents() {
    setStudents(getSortStudents());
  };

  function getStatus(student) {
    if (student.grade > 7) {
      return 'Aprobado';
    } else {
      return 'Desaprobado';
    }
  };


  // TODO: Retornar la cantidad de estudiantes aprobados
  const getCantidadAlumnosAprobados = () => {
  };

  // TODO: Retornar la cantidad de estudiantes desaprobados
  const getCantidadAlumnosDesaprobados = () => {
  };

  // TODO: Buscar el estudiante con mayor nota
  const getBestStudent = () => {
  };

  return (
    <div>
      <h1 className="header">App de curso</h1>
      <h2 className="header">Lista de Alumnos: {students.length}</h2>
      <div className="input-container">
        <input type="text" value={newStudent} onChange={handleStudentChange} placeholder="Nombre del alumno" className="input" />
        <input type="text" value={newGrade} onChange={handleGradeChange} placeholder="Nota del alumno" className="input" />
        <button onClick={addStudent} className="button">Agregar Alumno</button>
        <button onClick={sortStudents} className="button">Ordenar</button>
      </div>
      <ul className='list'>
        {students.map((student, index) => (
          <li key={index}>
            <span>{student.name} - {student.grade} - {getStatus(student)}</span>
          </li>
        ))}
      </ul>

      <h2 className="header">Cantidad de Alumnos Aprobados: {getCantidadAlumnosAprobados()}</h2>
      <h2 className="header">Cantidad de Alumnos Desaprobados: {getCantidadAlumnosDesaprobados()}</h2>
      <h2 className="header">Mejor Nota: {getBestStudent()}</h2>
    </div>
  );
};

export default App;
