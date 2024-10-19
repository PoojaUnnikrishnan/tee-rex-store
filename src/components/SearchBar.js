import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const SearchBar = ({
  SearchTerm,
  setSearchTerm,
  filters,
  updateFilters,
  priceRanges,
  allProducts,
}) => {
  const [clicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!clicked);
  };

  return (
    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 pt-10">
      <div class="flex items-center justify-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0 gap-2">
        <div class="w-1/2">
          <label htmlFor="search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 search-button-container">
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              value={SearchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="search"
              name="search"
              class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 focus:outline-1 focus:outline-gray-600"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <div
          class="bg-slate-900 px-3 py-1 rounded-lg md:hidden"
          onClick={handleClick}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="size-6"
          >
            <path
              d="M26 5H6V6L14 16H18L26 6V5Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M14 23L18 26V16H14V23Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
      {clicked && (
        <div class="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex border border-black">
          <div class="bg-white p-6 w-full max-w-3xl">
            <div className="h-48">
              <Sidebar
                filters={filters}
                products={allProducts}
                updateFilters={updateFilters}
                priceRanges={priceRanges}
                className="p-2"
              />
            </div>
            <button
              class="absolute top-4 right-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleClick}
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
