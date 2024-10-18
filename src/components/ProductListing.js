export const ProductListing = ({
  products,
  handleAddToCart,
  handleRemoveFromCart,
  cart,
  errorMessages,
}) => {
  return (
    <div class="mt-8 mb-10 grid grid-cols-1 gap-y-12 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 md:pl-2">
      {Array.isArray(products) ? (
        products.map((item, i) => {
          return (
            <div key={i}>
              <div class="relative">
                <label class="sr-only">List of all products</label>
                <div class="relative h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    class="h-full w-full object-contain object-center"
                  />
                </div>
                <div class="relative mt-10">
                  <h3 class="text-sm font-medium text-gray-900">
                    {item?.name}
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{item?.type}</p>
                </div>
                <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-800 opacity-50"
                  ></div>
                  <p class="relative text-lg font-bold text-black">
                    ${item.price}
                  </p>
                </div>
              </div>
              <div class="mt-6">
                {cart && cart[item.id] ? (
                  <div class="flex items-center">
                    <button
                      class="relative flex items-center w-full justify-center rounded-md border border-transparent bg-slate-300 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      -
                    </button>
                    <span class="mx-2 font-bold">{cart[item.id].qty}</span>
                    <button
                      class="relative flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    class="relative flex items-center w-full justify-center rounded-md border border-transparent bg-slate-300 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to cart
                  </button>
                )}
              </div>

              <div class="flex justify-center">
                {errorMessages && errorMessages[item.id] && (
                  <p class="text-red-500 text-sm">{errorMessages[item.id]}</p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};
