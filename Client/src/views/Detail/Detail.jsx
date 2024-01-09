import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>Detail ID: {id}</p>
    </div>
  );
};

export default Detail;
