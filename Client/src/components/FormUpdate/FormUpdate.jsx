import { useState } from "react";
import styles from "./FormUpdate.module.css";
import FancyFileUpdate from "../FancyFileUpdate/FancyFileUpdate";

const FormUpdate = () => {
  const [titulo, setTitulo] = useState("");

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titulo}>
        <label className={styles.label}>Titulo</label>
        <input
          className={styles.input}
          type="text"
          value={titulo}
          onChange={handleTituloChange}
        />
      </div>
      <FancyFileUpdate type="update" titulo={titulo} />
    </div>
  );
};

export default FormUpdate;
