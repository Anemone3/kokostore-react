import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MainHeader } from "../components/header/MainHeader";

export const App = () => {
  const URL = `https://kokostore-express.onrender.com/products`;
  const [products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);

  const { data, isLoading } = useFetch(URL);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <>
      <MainHeader />
      <main>
        
      </main>
    </>
  );
};
