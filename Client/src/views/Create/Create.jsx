import FormCreate from "../../components/FormCreate/FormCreate";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";

const Create = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    console.log("Botón clickeado");
    navigate("/");
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Create</h1>
      <FormCreate />
      <div className={styles.buttonsContainer}>
        <Button text="Home" onClickHandler={handleClickHome} />
      </div>
    </div>
  );
};

export default Create;
