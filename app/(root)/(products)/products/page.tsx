import React from "react";
import { getProducts } from "@/lib/services/fetch-product";
import ProductCard from "./_components/product-card";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  key:number;
};
const ProductPage = async () => {
  const products = await getProducts();


  return (
    <div className="grid grid-cols-3">
      {products?.map((o: ProductType, i: number) => (
        <ProductCard
          key={o.id}
          id={o.id}
          title={o.title}
          price={o.price}
          description={o.description}
          category={o.category}
          image={o.image}
        />
      ))}
    </div>
  );
};

export default ProductPage;
