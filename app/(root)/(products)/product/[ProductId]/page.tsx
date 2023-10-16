import Image from "next/image";
import React from "react";
import { getSingleProduct } from "@/lib/services/fetch-product";
import { generateMetadata } from "@/lib/meta-data/matadata";


interface Props {
  params: {
    ProductId: string;
  };
}

export {   generateMetadata  } ;

const ProductDetailsPage = async ({ params }: Props) => {
  const productDetails = await getSingleProduct(params.ProductId);
  const { title, image, price, description, category, rating } = productDetails;

  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="w-1/2">
        <Image
          width={300}
          height={500}
          src={image}
          alt={title}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2">
        <h1 className="text-2xl text-gray-700 font-semibold mb-4">
          Title:
          <span className="text-gray-900">{title}</span>
        </h1>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-gray-700 font-semibold">Ratings:</span>
          <span className="text-yellow-500">{rating.rate}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-gray-700 font-semibold">Count:</span>
          <span className="text-yellow-500">{rating.count}</span>
        </div>
        <p className="text-gray-700 mb-4">
          Description:
          <span className="text-gray-900 font-semibold">{description}</span>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            Price: <span className="text-gray-900 font-semibold">${price}</span>
          </p>
          <p className="text-gray-700">
            Category:{" "}
            <span className="text-gray-900 font-semibold">{category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
