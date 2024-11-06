// import { useEffect, useState } from "react";
// import { useFetch } from "../hooks/useFetch";
// import { Navbar } from "../components/navbar/navbar";
// import { ProductList } from "./product/ProductList";
// import { Pagination } from "../components/pagination/Pagination";
// import { Spin } from "../components/spin/Spin";
// import { Recomendation } from "../components/ProductList/Recomendation";

// export const ProductsPage = () => {
//   //Para la navegacion, podemos manejar las vistas mediante una condicion ternaria if
//   const [activeTab, setActiveTab] = useState('home');
//   const [currentPage, setCurrentPage] = useState(1);
//   const limitPage = 6;
//   const URL = `https://kokostore-express.onrender.com/products/paginated/?page=${currentPage}&limit=${limitPage}`;
//   const [products, setProducts] = useState([]);

//   const totalProducts = 14; //Cambiar esto a la cantidad de api/products
//   const { data, isLoading, hasError } = useFetch(URL);

//   useEffect(() => {
//     if (data) {
//       setProducts(data);
//     }
//   }, [data]);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalProducts) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex h-screen w-full overflow-hidden bg-[#f2f2f8]">
//       <Navbar />

//       <main className="flex-auto overflow-hidden">
//         <div className="container mx-auto">
//           <div className="flex justify-between">
//             <div>
//               <h2 className="mb-4 text-3xl font-bold text-gray-700">
//                 La Tiendita de Don Pepe
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 Disfruta de un desayuno simple, nutritivo y delicioso.
//               </p>
//             </div>
//             <Recomendation />
//           </div>
          
         
//           <section className="h-full flex items-center justify-center bg-gray-100">
//             {isLoading ? (
//               <div className="flex items-center justify-center w-full h-screen">
//                 <Spin />
//               </div>
//             ) : hasError ? (
//               <div>Error al cargar los productos. Inténtalo más tarde.</div>
//             ) : (
//                   <div className="grid grid-cols-3 gap-4 h-full">
//                 {products.map((product) => (
//                   <ProductList key={product.id} {...product} />
//                 ))}
//               </div>
//             )}
//           </section>

//           <div className="mt-8 flex justify-center">
//             <Pagination
//               handleNextPage={handleNextPage}
//               handlePreviousPage={handlePreviousPage}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//               totalPages={totalProducts}
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// };
