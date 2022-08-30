import React from "react";
import BodyHeader from "./BodyHeader";
import ProductListing from "./ProductListing";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex: "0.8"> */}
      <BodyHeader />
      <ProductListing />
      {/* </div> */}
    </div>
  );
};

export default Body;
