import React, { useState } from 'react';
import './styles.css';

/**
 * Representa un componente de formulario para agregar y ordenar estudiantes.
 * @param {Object} props - Los props del componente.
 * @param {Function} props.onAddStudent - Función de devolución de llamada para agregar un estudiante.
 * @param {Function} props.onSortStudent - Función de devolución de llamada para ordenar estudiantes.
 * @returns {JSX.Element} El componente StudentForm.
 */
const StudentForm = ({ onAddStudent, onSortStudent }) => {
  const [newStudent, setNewStudent] = useState('');
  const [newGrade, setNewGrade] = useState('');

  /**
   * Maneja el evento de cambio para el campo de entrada del estudiante.
   * @param {Object} event - El objeto de evento.
   */
  function handleStudentChange(event) {
    setNewStudent(event.target.value);
  }

  /**
   * Maneja el evento de cambio para el campo de entrada de la calificación.
   * @param {Object} event - El objeto de evento.
   */
  function handleGradeChange(event) {
    setNewGrade(event.target.value);
  }

  /**
   * Maneja el evento de clic del botón de agregar estudiante.
   * Llama a la función de devolución de llamada onAddStudent con los datos del nuevo estudiante.
   * Borra los campos de entrada después de agregar al estudiante.
   */
  function handleAddStudent() {
    if (newStudent && newGrade) {
      const student = {
        name: newStudent,
        grade: newGrade,
      };

      onAddStudent(student);

      setNewStudent('');
      setNewGrade('');
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={newStudent}
        onChange={handleStudentChange}
        placeholder="Nombre del alumno"
        className="input"
      />
      <input
        type="text"
        value={newGrade}
        onChange={handleGradeChange}
        placeholder="Nota del alumno"
        className="input"
      />
      <button onClick={handleAddStudent} className="button">
        Agregar Alumno
      </button>
      <button onClick={onSortStudent} className="button">
        Ordenar
      </button>
    </div>
  );
};

export default StudentForm;
