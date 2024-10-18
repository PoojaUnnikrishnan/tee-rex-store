import { ReactComponent as Cart } from "../assets/svg/Cart.svg";

export const Navbar = ({ cart }) => {
  return (
    <nav class="bg-slate-900">
      <div class="mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center px-2 lg:px-0 gap-10">
            <div class="flex-shrink-0">
              <a
                href="/"
                class="rounded-md px-3 py-2 font-semibold text-lg text-gray-300"
              >
                Tee's Store
              </a>
            </div>
            <div class="hidden lg:ml-6 lg:block">
              <div class="flex">
                <a
                  href="/"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </a>
              </div>
            </div>
          </div>
          <div class="mr-4">
            <div class="flex items-center">
              <a
                href="/cart"
                class="relative flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <p class="absolute top-0 -right-2 font-bold text-sm">
                  {Object.keys(cart).length}
                </p>
                <Cart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
