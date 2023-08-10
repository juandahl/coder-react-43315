import { useEffect } from "react";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

function useGetDocumentById(collectionName, id) {
    const [document, setDocument] = useState(null);

    // Devuelve un estudiante por id
    useEffect(() => {
      const db = getFirestore();
  
      const documentRef = doc(db, collectionName, id);
      // const studentRef = doc(db, "students", "ykIuZpMwNiziXZvgXgR4");
      getDoc(documentRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const documento = {
            id: snapshot.id,
            ...data,
          };
  
          setDocument(documento);
        }
      }).catch((err) => console.error(err));
  
    }, []);

    return { document };
}

export default useGetDocumentById;
