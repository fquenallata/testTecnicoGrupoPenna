import Button from "../../components/Button/Button";
import FormUpdate from "../../components/FormUpdate/FormUpdate";
import styles from "./Update.module.css";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    console.log("Botón clickeado");
    navigate("/");
  };
  return (
    <div className={styles.mainContainer}>
      <h1>Update</h1>
      <FormUpdate />
      <div className={styles.buttonsContainer}>
        <Button text="Home" onClickHandler={handleClickHome} />
      </div>
    </div>
  );
};

export default Update;
