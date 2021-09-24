import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from '../../redux/actions/productActions';
import ProductComponent from "../ProductComponent";
import "./ProductListing.scss";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div className="listing-wrapper">
      <div className="container row row-cols-1 row-cols-md-4 g-4">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
