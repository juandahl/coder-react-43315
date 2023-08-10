import { useParams } from "react-router-dom";

import ItemDetail from "./itemDetail";
import useGetDocumentById from "../hooks/useGetDocumentById";

function ItemDetailContainer() {
  const { id } = useParams();
  const { document } = useGetDocumentById("items", id);

  // const [document, setDocument] = useState(null);

  //   // Devuelve un estudiante por id
  //   useEffect(() => {
  //     const db = getFirestore();
  
  //     const documentRef = doc(db, "items", id);
  //     getDoc(documentRef).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.data();
  //         const documento = {
  //           id: snapshot.id,
  //           ...data,
  //         };
  
  //         setDocument(documento);
  //         console.log(documento);
  //       }
  //     }).catch((err) => console.error(err));
  
  //   }, []);

  if (!document) {
    return <div>loading...</div>
  }


  return (
    <div>
      <ItemDetail item={document} />
    </div>
  )
}

export default ItemDetailContainer;
