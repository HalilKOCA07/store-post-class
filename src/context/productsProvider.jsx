import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

//*CONTEXT OLUSTUR
const ProductsContext = createContext();

//*react hooklar js fonksiyonları içinde kullamnılmadığından custom hook kullanılır
//? custem hookle "use" ile başlamalıdır

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

//todo  CONTEXT'E DETAIL SAYFASINA GITTIKTEN SONRA GERI GELDIĞIMIZDE HEM KULLANICININ YAZDIĞI QUERY HEMDE API DEN GELEN VERININ KAYBOLMAMASI ICIN

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  console.log(products)

  const getProductsApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsApi();
  }, [search]);

  const values = { products, loading, search, setSearch, setProducts };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
