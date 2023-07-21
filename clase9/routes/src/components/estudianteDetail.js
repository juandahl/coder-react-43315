import { useParams } from "react-router-dom";

function EstudianteDetail() {
  const { id } = useParams();


  return <div>
    Estudiante detail: {id}

    </div>
}

export default EstudianteDetail;
