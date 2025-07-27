import Filters from "@/components/Filters";
import { colorMap, products } from "@/utils";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-8 w-full">
      <div className="text-black ">
        <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-justify">
            <h1 className="text-2xl text-left md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
              Shop All Products
            </h1>
            <div className="mx-auto text-justify">
              <p className="text-lg lg:text-xl text-black leading-relaxed">
                Discover Klassy's collection of{" "}
                <span className="text-grey-500 font-semibold">dresses</span>,
                <span className="text-grey-500 font-semibold"> jumpsuits</span>{" "}
                and more in our shop all products section. We have stunning
                collections of clothing for you to choose from that will make
                <span className="text-grey-500 font-semibold">
                  {" "}
                  heads turn
                </span>{" "}
                as you enter the room.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <Filters />

      {/* Products will go here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center text-black py-16">
  {products && products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden shadow-md backdrop-blur-md bg-white/10 border border-white/20 transition hover:shadow-xl"
        >
          {/* Product Image */}
          <img
            src={product.pictures[0]}
            alt={product.name}
            className="w-full h-80 object-cover"
          />

          {/* Details */}
          <div className="p-4 flex gap-4 items-center justify-between bg-white/20 backdrop-blur-sm">
            <h2 className="text-black text-lg font-semibold mb-1">
              {product.name}
            </h2>
            <p className="text-black  font-medium">
              ${product.price.toLocaleString()}
            </p>

            {/* Color Swatches */}
            <div className="flex gap-2 items-center">
              {[...new Set(product.variants.map((variant) => variant.color))].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: colorMap[color] || "#ccc" }}
                    title={color}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-white/70">No products to display yet</p>
  )}
</div>

      </div>
    </div>
  );
};

export default page;
