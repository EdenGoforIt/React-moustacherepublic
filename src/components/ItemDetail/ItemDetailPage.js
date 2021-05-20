import React, { useState } from "react";
import tee from "../../assets/classic-tee.webp";
import "./ItemDetailPage.css";

export const ItemDetailPage = () => {
  const [size, setSize] = useState(null);
  const handleSizeClick = (key) => {
    setSize(key);
  };
  return (
    <div className="row item-detail-container">
      <div className="col-lg-6">
        <img className="img-responsive tee-image" src={tee} alt="tee" />
      </div>
      <div className="col-lg-6 product-detail">
        <h4 className="title">Classic Tee</h4>
        <div className="price">
          <b>$75.00</b>
        </div>
        <p className="description font-color-888888">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          adipisci laboriosam, iusto natus dolores corporis quas dignissimos
          magnam, commodi esse eaque. Tempore laboriosam, rerum voluptate
          expedita aspernatur veniam quod explicabo?
        </p>
        <div className="size-section font-color-888888">
          SIZE <span className="star">*</span>{" "}
          <b className="size-selected font-color-222222">{size}</b>
        </div>
        <div className="size-buttons btn btn-group p-l-0">
          <button
            className="size-button font-color-8888888"
            onClick={() => handleSizeClick("S")}
          >
            S
          </button>
          <button
            className="size-button font-color-8888888"
            onClick={() => handleSizeClick("M")}
          >
            M
          </button>
          <button
            className="size-button font-color-8888888"
            onClick={() => handleSizeClick("L")}
          >
            L
          </button>
        </div>
        <div className="add-to-cart p-l-0">
          <button className="add-to-cart-button font-color-222222">
            ADD TO CART
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};
