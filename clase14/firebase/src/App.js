import { useEffect, useState } from 'react';
import './App.css';

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import useGetDocumentById from './hooks/useGetDocumentById';

function App() {
  // Estados
  const [students, setStudents] = useState([]);

  // Hooks
  const { document: student } = useGetDocumentById("students", "ykIuZpMwNiziXZvgXgR4");
  const { document: firstOrder } = useGetDocumentById("orders", "oXFf0ACV6ijMopq1Zoby");
  console.log(firstOrder);

  // Devolver todos los estudiantes
  useEffect(() => {
    const db = getFirestore();

    const studentCollection = collection(db, "students");
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

  if (!student || !firstOrder) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      {student.firstName} {student.lastName}

      {firstOrder.buyer.email}

      <div>Cantidad de estudiantes: {students.length}</div>
    </div>
  );
}

export default App;
