import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { categoryName } = useParams();

    // Devolver todos los estudiantes
    useEffect(() => {
      const db = getFirestore();
  
      const studentCollection = collection(db, "items");
  
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
          setItems(estudiantes);
        }
      })
  
    }, []);

    return (
    <div>
      <button>Libro 1</button>
      <button>Libro 2</button>
      <button>Libro 3</button>
    </div>
  )
}

export default ItemDetailContainer;
