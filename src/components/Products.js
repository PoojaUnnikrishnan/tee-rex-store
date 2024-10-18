import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductListing } from "./ProductListing";
import { NoResults } from "./NoResults";

export const Products = ({
  products,
  searchTerm,
  errorMessages,
  setSearchTerm,
  handleAddToCart,
  cart,
  handleRemoveFromCart,
  filters,
  updateFilters,
  priceRanges,
  allProducts
}) => {
  return (
    <div class="w-full flex flex-col gap-10">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        updateFilters={updateFilters}
        priceRanges={priceRanges}
        allProducts={allProducts}
      />
      {products.length ? (
        <ProductListing
          products={products}
          handleAddToCart={handleAddToCart}
          cart={cart}
          errorMessages={errorMessages}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ) : (
        <NoResults />
      )}
    </div>
  );
};
