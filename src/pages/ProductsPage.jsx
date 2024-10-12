import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MainHeader } from "../components/header/MainHeader";
import { Navbar } from "../components/navbar/navbar";
import { ProductList } from "../components/ProductList/ProductList";

export const ProductsPage = () => {
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
    <div className="w-full h-screen flex overflow-hidden bg-gray-100">
      {/* navbar left */}
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        {/* Lista de productos */}
        <section className="container mx-auto px-8 py-16 bg-gray-100">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Nuestro Menú</h2>
          <p className="mb-8 text-gray-600">Disfruta de un desayuno simple, nutritivo y delicioso.</p>

          {/* Lista de productos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product) => (
              <ProductList key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
