import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Products } from "./Products";
import { Sidebar } from "./Sidebar";

export const ProductSection = ({
  handleAddToCart,
  cart,
  errorMessages,
  handleRemoveFromCart,
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    Type: {},
    Colour: {},
    Price: {},
    Gender: {},
  });
  const [SearchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_PRODUCT_DETAILS_URL;

  const fetchProducts = useCallback(async () => {
    try {
      if (!apiUrl) {
        throw new Error("API URL is undefined. Check your .env file.");
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setLoading(true);
      setProducts(responseData);
      setFilteredProducts(responseData);
    } catch (e) {
      console.error(e);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const priceRanges = useMemo(() => [
    { name: "0-250", min: 0, max: 250 },
    { name: "251-450", min: 251, max: 450 },
    { name: "451+", min: 451, max: Infinity },
  ], []);

  const applyFilters = useCallback(() => {
    const filteredData = products.filter((product) => {
      if (SearchTerm.length >= 3) {
        const searchFields = [
          product.color,
          product.type,
          product.price.toString(),
          product.gender,
        ];
        const searchMatch = searchFields.some((field) =>
          field.toLowerCase().includes(SearchTerm.toLowerCase())
        );
        if (!searchMatch) return false;
      }
      const activeFilters = Object.keys(filters).filter((category) =>
        Object.values(filters[category]).some((value) => value)
      );
      if (activeFilters.length === 0) return true;
      return activeFilters.every((category) => {
        const activeOptions = Object.keys(filters[category]).filter(
          (option) => filters[category][option]
        );
        if (activeOptions.length === 0) return true;

        if (category === "Price") {
          return activeOptions.some((rangeName) => {
            const range = priceRanges.find((r) => r.name === rangeName);
            if (!range) {
              console.warn(`Price range not found for: ${rangeName}`);
              return false;
            }
            return product.price >= range.min && product.price <= range.max;
          });
        }
        return activeOptions.includes(product[category.toLowerCase()]);
      });
    });
    setFilteredProducts(filteredData);
  }, [products, SearchTerm, filters, priceRanges]);

  useEffect(() => {
    applyFilters();
  }, [filters, SearchTerm, products, applyFilters]);

  const updateFilters = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = { ...prevFilters[category] };
      updatedCategory[value] = !updatedCategory[value];
      const updatedFilters = { ...prevFilters, [category]: updatedCategory };
      Object.keys(updatedFilters).forEach((key) => {
        if (Object.values(updatedFilters[key]).every((v) => !v)) {
          delete updatedFilters[key];
        }
      });
      return updatedFilters;
    });
  };

  return (
    <div class="flex w-full lg:gap-10 h-full">
      {loading ? (
        <>
          <div class="w-full md:w-1/5 hidden md:block ">
            <Sidebar
              filters={filters}
              products={products}
              updateFilters={updateFilters}
              priceRanges={priceRanges}
              className="top-0 sticky p-8"
            />
          </div>
          <div class="w-full md:w-4/5 h-full flex">
            <Products
              products={filteredProducts}
              SearchTerm={SearchTerm}
              setSearchTerm={setSearchTerm}
              handleAddToCart={handleAddToCart}
              cart={cart}
              errorMessages={errorMessages}
              handleRemoveFromCart={handleRemoveFromCart}
              filters={filters}
              updateFilters={updateFilters}
              priceRanges={priceRanges}
              allProducts={products}
            />
          </div>
        </>
      ) : (
        <div class="w-full flex items-center justify-center text-2xl font-bold">
          Loading...
          <div class="border-t-2 p-4 rounded-full border-blue-500 animate-spin ml-2"></div>
        </div>
      )}
    </div>
  );
};
