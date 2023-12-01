import { useEffect, useState } from "react";
import "./App.css";
import ProductDisplay from "./components/ProductDisplay";
import { fetchProducts, Product } from "./utilities/api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-8xl mb-10">
        Product<span className="text-purple-700">ly</span> Store
      </h1>
      {products.length === 0 ? (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-left"
          role="alert"
        >
          <p className="font-bold">No Products</p>
          <p>Currently, there are no products to show</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductDisplay
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
