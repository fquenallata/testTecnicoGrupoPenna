import { useState } from "react";
import styles from "./FormCreate.module.css";
import FancyFile from "../FancyFile/FancyFile";

const FormCreate = () => {
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
      <FancyFile type="post" titulo={titulo} />
    </div>
  );
};

export default FormCreate;
