// CartContext.js

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  key: number;
  quantity: number;
};

type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeProduct:(productId: number) => void;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType) => {
    const productExists = cart.some((item) => item.id === product.id);

    if (!productExists) {
      setCart([...cart, product]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const updateProducts = cart.filter((o,i) => o.id !== productId);
    setCart(updateProducts);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity ,removeProduct}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
