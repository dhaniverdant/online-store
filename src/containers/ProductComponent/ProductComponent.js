import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    const truncateTitle = title.substring(0, 22);
    const truncateResult = title.length > 22 ? `${truncateTitle}...` : title;

    return (
        <div className="col" key={id}>
          <a style={{ textDecoration:"none" }} href={`/product/${id}`}>
          <div className="card h-100">
            <img src={image} alt={title} height="80%" width="100%" />
            <div className="card-body">
              <h5 className="card-title">{truncateResult}</h5>
              <p className="card-text">${price}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{category}</small>
            </div>
          </div>
      </a>
        </div>
    );
  });

  return renderList;
};

export default ProductComponent;
