import React from "react";
import tee from "../../assets/classic-tee.webp";
export const ShoppingCart = () => {
  const numberOfItemSelected = 4;
  return (
    <div className="row">
      <div className="col-2 offset-10 dropdown">
        <i className="fa fa-shopping-cart  d-md-none d-lg-none" />
        <p className="float-right d-none d-md-block d-lg-block">
          My Cart ({numberOfItemSelected})
        </p>
        <div className="dropdown-content">
          <div className="row m-b-10">
            <div className="col-4">
              <img src={tee} width="70" alt="tee" />
            </div>
            <div className="col-6">
              <p>Classic Tee</p>
              <p>
                1x <b>$75.00</b>
              </p>
              Size: S
            </div>
          </div>
          <div className="row m-b-10">
            <div className="col-4">
              <img src={tee} width="70" alt="tee" />
            </div>
            <div className="col-6">
              <p>Classic Tee</p>
              <p>
                3x <b>$75.00</b>
              </p>
              Size: L
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
