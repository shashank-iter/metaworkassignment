"use client";

import React, { useEffect } from "react";
import Cart from "./Cart";
import { useState } from "react";
import useStoreItem from "./store";
export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  let items = useStoreItem((state) => state.items);
  useEffect(() => {
    const array = items.length;
 
    setCartCount(array);
  }, [items]);

  return (
    <div className="flex flex-row sticky top-0 z-50 bg-blue-950">
      <div className="w-1/2 flex flex-row justify-start">
        <h1 className="text-lg md:text-3xl p-4 font-bold">MetaWork Store</h1>
      </div>
      <div className="w-1/2 flex-row ">
      <div className="flex flex-row justify-end p-4">
        <Cart />
        <span className="text-sm  mx-2 font-bold bg-red-700 text-white p-2 rounded-full">
          {cartCount}
        </span>
      </div>
    </div>
    </div>
  );
}
