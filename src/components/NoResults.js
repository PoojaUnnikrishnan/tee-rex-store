import React from "react";
import { ReactComponent as NewResults } from "../assets/svg/NewResults.svg";
export const NoResults = () => {
  return (
    <div class="flex items-center mt-20 w-full h-full flex-col">
      <span class="sr-only">No results found</span>
      <NewResults />
      <p class="text-slate-500 text-sm lg:text-lg font-semibold mt-5">
        No results found
      </p>
    </div>
  );
};
