import styles from "./MisArchivosTabla.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MisArchivosTabla() {
  const [archivos, setArchivos] = useState([]);

  const getall = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/archivos/all");
      setArchivos(data);
    } catch (error) {
      console.error("Error al obtener archivos:", error);
    }
  };

  useEffect(() => {
    getall();
  }, []);

  console.log(archivos);
  return (
    <div className={styles.mainContainer}>
      <hr />
      <div className={styles.misArchivos}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>titulo</th>
              <th>url</th>
              <th>Fecha de modificacion</th>
            </tr>
          </thead>
          <tbody>
            {/* {archivos.map((archivo) => (
              <tr key={archivo.id}>
                <td>{archivo.id}</td>
                <td>{archivo.titulo}</td>
                <td>{archivo.url}</td>
                <td>{archivo.fechaModificacion}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MisArchivosTabla;
