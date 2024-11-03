import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";

import { useFetch } from "./hooks/useFetch";
import { SearchProduct } from "./pages/product/SearchProduct";
import { ProductList } from "./pages/product/ProductList";
import { Recomendation } from "./pages/product/Recomendation";
import { Pagination } from "./pages/product/Pagination";
import { Loading } from "./components/Loading";
import { ErrorMessage } from "./components/ErrorMessage";

export const App = () => {
    
  const [activeTab, setActiveTab] = useState("home");

  const [currentPage, setCurrentPage] = useState(1);
  const limitPage = 6;
  const totalProducts = 14;
  const URL = `https://kokostore-express.onrender.com/products/paginated/?page=${currentPage}&limit=${limitPage}`;

  const [products, setProducts] = useState([]);

  const { data, isLoading, hasError, error, refetch } = useFetch(URL);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50">
      {/* Main Layout */}
      <div className="flex h-full flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Navbar />
        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <SearchProduct />
          <div className="flex min-h-0 flex-1">
            {/* Products Section */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex-1 overflow-hidden">
                {isLoading ? (
                  <Loading />
                ) : hasError ? (
                  <ErrorMessage
                    message={error?.message || "Error al cargar los productos"}
                    onRetry={refetch}
                  />
                ) : (
                  <div className="grid h-full grid-cols-3 gap-4">
                    {products.map((product) => (
                      <ProductList key={product.id} {...product} />
                    ))}
                  </div>
                )}
              </div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalProducts}
              />
              {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
            </div>

            {/* Right Sidebar */}
            <div className="w-80 overflow-hidden border-l border-gray-200 p-6">
              <Recomendation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
