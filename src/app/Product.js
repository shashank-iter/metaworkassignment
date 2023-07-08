"use Client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import products from "../../data/products";
import newProducts from "../../data/newProducts";
import store from "./store";
import swal from "sweetalert";

export default function Product() {
  const [product, setProduct] = useState(products);
  const [newProduct, setNewProduct] = useState(newProducts);
  const addItem = store((state) => state.addItem);
  const items = store((state) => state.items);
  const handleAddtoCart = (product) => () => {
    if(items.find((item) => item.id === product.id)){
      swal("Oops!", "Item Already in Cart!", "error");
      return;
    }
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.images[0],
    });
    swal("Good job!", "Item Added to Cart!", "success");
  };
  const handleRemoveItem = (product) => () => {
    removeItem({
    });
  };

  return (
    <>
      <Tab.Group>
        <div className="flex flex-row justify-center my-5">
          <Tab.List className={"bg-white text-black rounded-md text-2xl"}>
            <Tab className={"px-10 py-1"}>All Products</Tab>
            <Tab className={"px-10 py-1"}>New Arrival</Tab>
          </Tab.List>
        </div>
        <div className="flex flex-row justify-center w-full ">
          <Tab.Panels className={"flex flex-column w-full"}>
            <Tab.Panel
              className={"w-full flex flex-row gap-2 flex-wrap"}
              key={product.id}
            >
              {products.map((product) => {
                return (
                  <div
                    className="container mx-auto max-w-sm w-full sm:w-1/2"
                    key={product.id}
                  >
                    <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl">
                      <div className="prod-title">
                        <p className="text-2xl uppercase text-gray-900 font-bold">
                          {product.title}
                        </p>
                        <p className="uppercase text-sm text-gray-400">
                          {product.description}
                        </p>
                      </div>
                      <div className="prod-img">
                        <img
                          src={`${product.images[0]}`}
                          className="w-full object-cover object-center"
                        />
                      </div>
                      <div className="prod-info grid gap-10 my-2">
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                          <p className="font-bold text-xl">$ {product.price}</p>
                          <button
                            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                            onClick={handleAddtoCart(product)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Tab.Panel>
            <Tab.Panel
              className={"w-full flex flex-row gap-2 flex-wrap"}
              key={newProduct.id}
            >
              {newProducts.map((product) => {
                return (
                  <div className="container mx-auto max-w-sm w-full sm:w-1/2" key={product.id}>
                    <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl">
                      <div className="prod-title">
                        <p className="text-2xl uppercase text-gray-900 font-bold">
                          {product.title}
                        </p>
                        <p className="uppercase text-sm text-gray-400">
                          {product.description}
                        </p>
                      </div>
                      <div className="prod-img">
                        <img
                          src={`${product.images[0]}`}
                          className="w-10 h-10 object-cover object-center"
                        />
                      </div>
                      <div className="prod-info grid gap-10 my-2">
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                          <p className="font-bold text-xl">$ {product.price}</p>
                          <button
                            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                            onClick={handleAddtoCart(product)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}
