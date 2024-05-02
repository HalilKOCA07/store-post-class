import ProductsProvider from "./context/productsProvider";
import AppRouters from "./routers/AppRouters";


function App() {
  return (
    <ProductsProvider>
        <AppRouters />
    </ProductsProvider>
  );
}

export default App;
