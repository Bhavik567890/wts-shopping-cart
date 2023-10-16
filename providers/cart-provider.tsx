"use client"

import { CartProvider } from "@/context/CartContext"
import React from "react"

export const CartContextProvider = ({children}:{children:React.ReactNode}) =>{
   return(
    <CartProvider>
        {children}
    </CartProvider>
   ) 
}