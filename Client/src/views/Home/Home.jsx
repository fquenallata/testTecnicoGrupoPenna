import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.misArchivos}>
        <h1>Mis Archivos</h1>
        <hr />
      </div>
    </div>
  );
}

export default Home;
