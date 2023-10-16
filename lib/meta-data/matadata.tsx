// components/metadata.tsx

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    ProductId: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = params.ProductId;
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch blog details');
    }
    const ProductDetails = await response.json();

    const { title, description } = ProductDetails;

    return {
      title: title || "Default Title", 
      description: description || "Default Description", 
    };
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}
