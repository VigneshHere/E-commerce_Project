import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    image,
    price,
    variants = [],
    stock,
  } = product;

  const isOutOfStock = stock === 0;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image || "https://via.placeholder.com/300x200"}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-success font-weight-bold">₹{price}</p>

          {variants.length > 0 && (
            <select className="form-control mb-2">
              {variants.map((variant, index) => (
                <option key={index} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          )}

          <button
            className={`btn btn-${isOutOfStock ? "secondary" : "primary"} mt-auto`}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
