import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  fetchProduct,
} from "../../redux/actions/productActions";
import "./ProductDetail.scss";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="card mb-3 detail-wrapper">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-fluid rounded-start" src={image} alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{category}</p>
              <p className="card-text"><small className="text-muted">${price}</small></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
