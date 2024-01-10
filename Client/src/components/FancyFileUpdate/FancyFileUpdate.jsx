import { useState } from "react";
import styles from "./FancyFileUpdate.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FancyFileUpdate = (props) => {
  const [archivo, setArchivo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();

    const { titulo } = props;
    const formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("titulo", titulo);
    formData.append("id", id);

    try {
      const { data } = await axios.put(
        "http://localhost:3001/archivos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/");
    } catch (error) {
      console.error("error", error.message);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.fancyContainer}>
        <input
          id="archivo"
          type="file"
          onChange={(e) => {
            setArchivo(e.target.files[0]);
          }}
          className={styles.fancyFile}
        />
        <label htmlFor="archivo">
          <span className={styles.fancyFileName}>
            <span>
              {archivo ? archivo.name : "Ningún Archivo Seleccionado"}
            </span>
          </span>
          <span className={styles.fancyFileButton}>Buscar Archivo</span>
        </label>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={update}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default FancyFileUpdate;
