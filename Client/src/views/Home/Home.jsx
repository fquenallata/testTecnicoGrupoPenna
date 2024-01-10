import styles from "./Home.module.css";
import MisArchivosTabla from "../../components/MisArchivosTabla/MisArchivosTabla";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.misArchivos}>
        <h1>Mis Archivos</h1>
        <MisArchivosTabla />
        <hr />
      </div>
    </div>
  );
}

export default Home;
