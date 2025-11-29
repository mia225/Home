import {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../api/api_base";
import Loading from "./Loading.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState (true);



  useEffect(()=>{
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/products`);
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          console.log("Error fetching products:", error);
        }
  };

  fetchProducts();
  },[])
   

  if (isLoading) return <Loading />;


   return (
    <div>
      <h1 className="text-3xl sm:text-3xl font-bold text-center text-[#0A1F4A] mb-10 py-10">Product List</h1>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
          >
            {/* Product Image */}
            <img
              src={`${BASE_URL}${product.image}`}
              alt="product"
              className="w-full h-70 object-contain mb-6"
            />

            {/* Name + Price */}
            <div className="flex justify-between items-center w-full mb-1">
              <h3 className="font-bold text-2xl">{product.product_name}</h3>
              <p className="text-md font-semibold">{product.product_price}</p>
              
            </div>

            <div className="flex justify-between items-center w-full mb-1">
            <p className="text-md font-normal">{product.description}</p>
            </div>


            {/* Brand */}
            <div className="flex justify-between items-center w-full mb-1 py-5">
            <p className="font-bold text-xl text-gray-600 mb-4 items-center">{product.brand}</p>

            {/* Buy Button */}
            <button className="bg-[#0A1F4A] text-white text-sm px-15 py-2 rounded-md mt-auto">
              BUY
            </button>
            </div>
          </div>

      ))
      }
       </div>
    </div>
   
  );
};

export default ProductList;