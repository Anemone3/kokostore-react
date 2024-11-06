import { useState } from "react";

const useFilter = () => {
  const [filters, setFilters] = useState({ category: "all", minprice: 0 });



  return {filters,setFilters};
};
