import React from "react";
import text from "./text.json";
import { useDispatch } from "react-redux";
import { incrementcart, remove } from "./Createslice";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        {text.products.map((product) => (
          <div
            key={product.id}
            className="card m-1 d-flex justify-content-center my-4"
            style={{ width: "18rem", " height": "25rem", textAlign: "center" }}
          >
            <img
              src={product.image}
              alt="no pic"
              className="card-img-top mx-auto my-2"
              style={{ width: "15rem", height: "20rem" }}
            ></img>
            <p>
              {product.name} | Rs.{product.price}
            </p>
            <div>
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch(
                    incrementcart({
                      ProductName: product.name,
                      ProductPrice: product.price,
                    })
                  )
                }
              >
                Buy Now
              </button>
              <button
                className="btn btn-warning"
                onClick={() =>
                  dispatch(
                    remove({
                      ProductName: product.name,
                      ProductPrice: product.price,
                    })
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
