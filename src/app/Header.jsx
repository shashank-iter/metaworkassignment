"use client";

import React from "react";
import Cart from "./Cart";
import { useState } from "react";
export default function Header() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex flex-row justify-start">
        <h1 className="text-lg md:text-3xl p-4 font-bold">MetaWork Store</h1>
      </div>
      <div className="w-1/2 flex-row ">
      <div className="flex flex-row justify-end p-4">
        <Cart />
      </div>
    </div>
    </div>
  );
}
