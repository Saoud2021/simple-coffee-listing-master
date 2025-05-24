import React from "react";
import Coffee from "./component/Coffee";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="background">
          <img src="/public/bg-cafe-lg.jpg" alt="" />
        </div>
        <div className="wrapper">
          <div className="wrapper_description">
            <img src="/public/vector.svg " alt="" />
            <h1>Our Collection</h1>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className="availability">
            <button>All Products</button>
            <button>Available Now </button>
          </div>
          <div className="products">
            <Coffee />
          </div>
        </div>
      </div>
    </div>
  );
}
