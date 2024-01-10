import styles from "./Button.module.css";

const Button = ({ text, onClickHandler }) => {
  return (
    <div>
      <button className={styles.miBoton} onClick={onClickHandler}>
        {text}
      </button>
    </div>
  );
};

export default Button;
