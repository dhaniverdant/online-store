import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      // <div className="four wide column" key={id}>
      //   <Link to={`/product/${id}`}>
      //     <div className="ui link cards">
      //       <div className="card">
      //         <div className="image">
      //           <img src={image} alt={title} />
      //         </div>
      //         <div className="content">
      //           <div className="header">{title}</div>
      //           <div className="meta price">$ {price}</div>
      //           <div className="meta">{category}</div>
      //         </div>
      //       </div>
      //     </div>
      //   </Link>
      // </div>
        <div className="col" key={id}>
          <a style={{ textDecoration:"none" }} href={`/product/${id}`}>
          <div className="card h-100">
            <img src={image} alt={title} height="80%" width="100%" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
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
  return <>{renderList}</>;
};

export default ProductComponent;
