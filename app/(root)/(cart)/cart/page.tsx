"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const { cart, updateQuantity, removeProduct } = useCart();

  console.log(cart,12)

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <>
          <Link href={'/products'}>
            <Button variant={'ghost'}>
              Shop Now
            </Button>
          </Link>
          <p>Your cart is empty.</p>
        </>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b-2 p-4">
              <div className="flex items-center">
                {/* <Image src={product.image} alt={product.title} width={300} height={300} className="h-16 w-16 mr-4" /> */}
                <div>
                  <h2 className="font-semibold text-xl">{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  onClick={() => updateQuantity(product.id, (product.quantity || 1) + 1)}
                  className="bg-blue-500 text-white p-2 mx-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                </Button>
                <p>Quantity: {product.quantity || 1}</p>
                <Button
                  onClick={() => updateQuantity(product.id, (product.quantity || 1) - 1)}
                  className="bg-red-500 text-white p-2 mx-2"
                >
                  <Minus className="h-4 w-4 mr-2" />
                </Button>
                <Button onClick={() => removeProduct(product.id)} className="bg-red-500 text-white p-2 mx-2">
                  <Trash className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Subtotal: ${calculateSubtotal()}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
