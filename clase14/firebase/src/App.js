import { useEffect, useState } from 'react';
import './App.css';

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

function App() {
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState([]);

  // Devuelve un estudiante por id
  useEffect(() => {
    const db = getFirestore();

    const studentRef = doc(db, "students", "ykIuZpMwNiziXZvgXgR4");
    getDoc(studentRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        // const estudiante = {
        //   id: snapshot.id,
        //   ...data,
        // };
        const estudiante = {
          id: snapshot.id,
          firstName: data.firstName,
          lastName: data.lastName
        };

        setStudent(estudiante);
      }
    })

  }, []);

  // Devolver todos los estudiantes
  useEffect(() => {
    const db = getFirestore();

    const studentCollection = collection(db, "students");
    const conditionEdad = where("age", "<", 25);
    const conditionNombre = where("lastName", "==", "Dahl");

    const q = query(studentCollection, conditionNombre);

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

  if (!student) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      {student.firstName} {student.lastName}

      <div>Cantidad de estudiantes: {students.length}</div>
    </div>
  );
}

export default App;
