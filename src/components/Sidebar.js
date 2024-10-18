export const Sidebar = ({
  filters,
  updateFilters,
  products,
  priceRanges,
  className,
}) => {
  const extractUniqueValues = (key) =>
    Array.from(new Set(products.map((item) => item[key])));
  const filterCategories = [
    { name: "Gender", values: extractUniqueValues("gender") },
    { name: "Color", values: extractUniqueValues("color") },
    { name: "Type", values: extractUniqueValues("type") },
    { name: "Price", values: priceRanges.map((range) => range.name) },
  ];

  return (
    <div class={`w-full shadow-lg bg-slate-900 text-gray-300 ${className}`}>
      {filterCategories.map((category) => (
        <div class="py-3" key={category.name}>
          <span class="sr-only">Filters</span>
          <div class="font-bold text-white">{category.name}</div>
          <ul class="py-2">
            {category.values.map((value, i) => (
              <li
                class="flex items-center gap-4"
                key={i}
                onClick={() => updateFilters(category.name, value)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#C4C4C4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="12" height="12" />
                  {filters[category.name]?.[value] && (
                    <path
                      d="M2 6 L5 9 L10 2"
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                  )}
                </svg>
                {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
