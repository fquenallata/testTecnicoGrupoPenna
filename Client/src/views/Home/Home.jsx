import styles from "./Home.module.css";
import MisArchivosTabla from "../../components/MisArchivosTabla/MisArchivosTabla";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Botón clickeado");
    navigate("/create");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.misArchivos}>
        <h1>Mis Archivos</h1>
        <MisArchivosTabla />
        <Button text="Subir Archivo" onClickHandler={handleClick} />
      </div>
    </div>
  );
}

export default Home;
