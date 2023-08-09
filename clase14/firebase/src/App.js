import { useEffect, useState } from 'react';
import './App.css';

import { addDoc, doc, updateDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import useGetDocumentById from './hooks/useGetDocumentById';

function App() {
  // Estados
  const [students, setStudents] = useState([]);

  // Hooks
  const { document: student } = useGetDocumentById("students", "ykIuZpMwNiziXZvgXgR4");
  const { document: firstOrder } = useGetDocumentById("orders", "oXFf0ACV6ijMopq1Zoby");

  // Devolver todos los estudiantes
  useEffect(() => {
    const db = getFirestore();

    const studentCollection = collection(db, "students");

    const q = query(studentCollection);

    getDocs(q).then((snapshot) => {
      console.log("entra al then");
      if (snapshot.size > 0) {
        const estudiantes = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        console.log(estudiantes);
        setStudents(estudiantes);
      }
    })

  }, []);

  function addStudent() {
    const newStudent = {
      firstName: "Nombre",
      lastName: "Apellido",
      age: 38
    }

    const db = getFirestore();
    const collectionRef = collection(db, "students");

    addDoc(collectionRef, newStudent).then((doc) => console.log(doc));
  }

  function updateStudent() {
    const db = getFirestore();

    const studentRef = doc(db, "students", "ykIuZpMwNiziXZvgXgR4");

    updateDoc(studentRef, { firstName: "Juan" }).then((doc) => console.log(doc));
  }

  if (!student || !firstOrder) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      {student.firstName} {student.lastName}

      <div>Cantidad de estudiantes: {students.length}</div>

      <button onClick={addStudent}>Agregar estudiante</button>
      <button onClick={updateStudent}>Actualizar estudiante</button>
    </div>
  );
}

export default App;
