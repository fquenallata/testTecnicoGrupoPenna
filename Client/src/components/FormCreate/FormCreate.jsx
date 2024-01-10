import { useState } from "react";
import axios from "axios";

const FormCreate = () => {
  const [Arhivo, setArchivo] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Arhivo", Arhivo);
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

      console.log("ok", data);
    } catch (error) {
      console.error("error", error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            setArchivo(e.target.files[0]);
          }}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormCreate;
