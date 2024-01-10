import { useState } from "react";
import styles from "./FancyFile.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FancyFile = (props) => {
  const [archivo, setArchivo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const { titulo } = props;
    const formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("titulo", titulo);

    try {
      const { data } = await axios.post(
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
      setError(
        "Por favor, asegúrate de completar el título y subir un archivo."
      );
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
        <button className={styles.button} onClick={submit}>
          Enviar
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default FancyFile;
