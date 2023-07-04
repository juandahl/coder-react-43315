import "./List.css";

const List = ({ students }) => {

  const getStatus = (student) => (student.grade >= 7 ? 'Aprobado' : 'Desaprobado');

  return (
    <ul className='list'>
    {students.map((student, index) => (
      <li key={index}>
        <span>{student.name} - {student.grade} - {getStatus(student)}</span>
      </li>
    ))}
  </ul>
)
}

export default List;
