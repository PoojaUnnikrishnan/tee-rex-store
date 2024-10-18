import React, { useEffect, useState } from "react";

export const Cart = ({
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  handleDeleteFromCart,
}) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = Object.values(cart).reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );
      setTotalAmount(total);
    };
    console.log("Cart updated in Cart component:", cart);
    calculateTotal();
  }, [cart]);

  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <>
          {cart && Object.keys(cart).length ? (
            <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section aria-labelledby="cart-heading" class="lg:col-span-7">
                <h2 id="cart-heading" class="sr-only">
                  Items in your shopping cart
                </h2>
                <ul class="divide-y divide-gray-200 border-b border-t border-gray-200">
                  {Object.keys(cart).map((key, index) => (
                    <li class="flex py-6 sm:py-10">
                      <div class="flex-shrink-0">
                        <img
                          src={cart[key].imageURL}
                          alt={cart[key].name}
                          class="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div class="flex justify-between">
                              <h3 class="text-sm">
                                <a
                                  href="/"
                                  class="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {cart[key].name}
                                </a>
                              </h3>
                            </div>
                            <div class="mt-1 flex text-sm">
                              <p class="text-gray-500">{cart[key].type}</p>
                            </div>
                            <p class="mt-1 text-sm font-medium text-gray-900">
                              ${cart[key].price}
                            </p>
                          </div>

                          <div class="mt-4 flex items-center justify-between">
                            <div class="flex items-center">
                              <button
                                class="relative flex items-center w-full justify-center rounded-md border border-transparent bg-slate-300 px-4 md:px-8 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                onClick={() => handleRemoveFromCart(key)}
                              >
                                -
                              </button>
                              <span class="mx-2 font-bold">
                                {cart[key].qty}
                              </span>
                              <button
                                class="relative flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-4 md:px-8 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                onClick={() => handleAddToCart(cart[key])}
                              >
                                +
                              </button>
                            </div>
                            <div class="absolute right-0 top-0">
                              <button
                                type="button"
                                class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => handleDeleteFromCart(key)}
                              >
                                <span class="sr-only">Remove</span>
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
                        </div>

                        <p class="mt-4 flex space-x-2 text-sm text-gray-700">
                          <svg
                            class="h-5 w-5 flex-shrink-0 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>In stock</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <section
                aria-labelledby="summary-heading"
                class="mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border"
              >
                <h2
                  id="summary-heading"
                  class="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <dl class="mt-6 space-y-4">
                  <div class="flex items-center justify-between">
                    <dt class="text-sm text-gray-600">Subtotal</dt>
                    <dd class="text-sm font-medium text-gray-900">
                      ${totalAmount}
                    </dd>
                  </div>
                  <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt class="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <a
                        href="/"
                        class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </dt>
                    <dd class="text-sm font-medium text-gray-900">
                      {totalAmount > 0 ? "$5.00" : "$0"}
                    </dd>
                  </div>
                  <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt class="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a
                        href="/"
                        class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </dt>
                    <dd class="text-sm font-medium text-gray-900">
                      {totalAmount > 0 ? "$10.00" : "$0"}
                    </dd>
                  </div>
                  <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt class="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd class="text-base font-medium text-gray-900">
                      {totalAmount > 0 ? totalAmount + 15 : "$0"}
                    </dd>
                  </div>
                </dl>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          ) : (
            <section class="lg:col-span-7">
              <div class="mt-20 flex flex-col justify-center items-center">
                <div class="text-xl font-semibold flex text-center justify-center">
                  Cart is Empty!😔
                </div>
                <a
                  href="/"
                  class="rounded-md border border-transparent bg-blue-600 px-4 py-1 mt-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add To Cart
                </a>
              </div>
            </section>
          )}
        </>
      </div>
    </div>
  );
};
