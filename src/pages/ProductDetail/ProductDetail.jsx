import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();
  return <div>ProductDetail {id}</div>;
};
