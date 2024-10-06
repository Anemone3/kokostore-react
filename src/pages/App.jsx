
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";



export const App = () => {

  const URL = `https://kokostore-express.onrender.com/products`;

  const [products, setProducts] = useState([])

  const {data,isLoading}  = useFetch(URL);




  return (
    <>
      <h1>Información de Products</h1>
      <hr />
      {isLoading ? <p>Cargando...</p> : <pre>{ JSON.stringify(data, null,2) }</pre>}
    </>
  );
};
