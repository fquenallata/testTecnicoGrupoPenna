const FormCreate = () => {
  return (
    <div>
      <form>
        <label
          type="file"
          onChange={(e) => {
            console.log(e);
          }}
        ></label>
      </form>
    </div>
  );
};

export default FormCreate;
