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
      const student = {
        name: newStudent,
        grade: newGrade,
      }

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

  // function getStatus(student) {
  //   return student.grade >= 7 ? 'Aprobado' : 'Desaprobado';
  // };

  const getStatus = (student) => (student.grade >= 7 ? 'Aprobado' : 'Desaprobado')


  // TODO: Retornar la cantidad de estudiantes aprobados
  const getCantidadAlumnosAprobados = () => {
    let aprobados = 0;
    students.forEach(student => {
      aprobados = student.grade >= 7 ? aprobados + 1 : aprobados;
    });

    return aprobados;
  };

  // TODO: Retornar la cantidad de estudiantes desaprobados
  const getCantidadAlumnosDesaprobados = () => {
    let desaprobados = 0;
    students.forEach(student => {
      if (student.grade < 7) {
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
          <li key={index} style={{ backgroundColor: student.grade >= 7 ? "#1BB88C" : "#D5380D" }}>
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
