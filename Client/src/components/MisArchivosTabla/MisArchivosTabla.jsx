import styles from "./MisArchivosTabla.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const handleClickEdit = (id) => {
    console.log("Botón clickeado");
    navigate(`/update/${id}`);
  };

  function truncateUrl(url) {
    const maxLength = 30; // ajusta la longitud máxima según tus necesidades
    return url.length > maxLength ? `${url.slice(0, maxLength)}...` : url;
  }

  useEffect(() => {
    getall();
  }, []);

  console.log(archivos);
  return (
    <div className={styles.mainContainer}>
      <hr />
      <div className={styles.misArchivos}>
        {archivos.length === 0 ? (
          <p>No hay archivos disponibles. Por favor, crea uno.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>titulo</th>
                <th>url</th>
                <th>Fecha de modificacion</th>
                <th>edit</th>
              </tr>
            </thead>
            <tbody>
              {archivos.map((archivo) => (
                <tr key={archivo.id}>
                  <td>{archivo.id}</td>
                  <td>{archivo.titulo}</td>
                  <td>
                    <a
                      href={archivo.cloudinaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {truncateUrl(archivo.cloudinaryUrl)}
                    </a>
                  </td>
                  <td>{archivo.ultimaModificacion}</td>
                  <td>
                    <button onClick={() => handleClickEdit(archivo.id)}>
                      edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MisArchivosTabla;
