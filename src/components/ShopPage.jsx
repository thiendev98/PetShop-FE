import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./style.css";
import "./Shop.css";

export default function ShopPage() {
  var products = [
    {
      key: "1",
      name: "Small dog fish",
      img: "https://uploads-ssl.webflow.com/611a94f7245a41e60e0ce4e3/611d87e676771f4ea300eeaf_image-4-shop-veterinary-x-template.jpg",
      price: 10.99,
      quantity: 1,
    },
    {
      key: "2",
      name: "Small duck pet toy",
      img: "https://uploads-ssl.webflow.com/611a94f7245a41e60e0ce4e3/611d87ae9189a6483364174a_image-5-shop-veterinary-x-template.jpg",
      price: 9.99,
      quantity: 1,
    },
    {
      key: "3",
      name: "Small and medium dog brush",
      img: "https://uploads-ssl.webflow.com/611a94f7245a41e60e0ce4e3/611d83a0c0a8b0c6aefb7fcf_image-1-shop-veterinary-x-template.jpg",
      price: 16.99,
      quantity: 1,
    },
    {
      key: "4",
      name: "Small and medium dog brush",
      img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611d83a9dc225ecfd3ae419c_image-6-shop-veterinary-x-template.jpg",
      price: 9.99,
      quantity: 1,
    },
    {
      key: "5",
      name: "Small yellow dog toy",
      img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611d869363e4025a23a25430_image-2-shop-veterinary-x-template.jpg",
      price: 9.99,
      quantity: 1,
    },
    {
      key: "6",
      name: "Pack of 2 dog bandanas",
      img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611d8708dc225e58fcae5b39_image-3-shop-veterinary-x-template.jpg",
      price: 19.99,
      quantity: 1,
    },
  ];
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  function handleClick(index) {
    setCurrent(index);
    setDetail(true);
    $("#Slider").hide();
  }
  function returnShop() {
    setCurrent(0);
    setDetail(false);
    $("#Slider").show();
  }
  return (
    <div id="shoppage">
      <div id="Page">
        <section id="Slider">
          <h1>Shop</h1>
          <p className="Slider__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <div className="List__product">
          {products.map((product, index) => {
            return (
              <>
                {current === 0 && detail == false && (
                  <div>
                    <div
                      className="product__item"
                      onClick={() => handleClick(index)}
                    >
                      <img className="product__img" src={product.img} />
                      <h2 className="product__name">{product.name}</h2>
                      <p className="product__text">{product.about}</p>
                      <p className="product__price">{product.price} USD</p>
                    </div>
                  </div>
                )}
                {current === index && detail == true && (
                  <>
                    <div id="Stinfo__product">
                      <div className="row container-fluid">
                        <div className="col-xl-6 col-lg-6">
                          <img className="info__img" src={product.img} />
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <ul>
                            <li>
                              <h2>{product.name}</h2>
                            </li>
                            <li>
                              {" "}
                              <p
                                className="info__price"
                                style={{ fontWeight: "600", fontSize: "24px" }}
                              >
                                {product.price} USD
                              </p>
                            </li>
                            <li>
                              <p style={{ fontSize: "20px" }}>
                                {product.about}
                              </p>
                            </li>
                            <li>
                              <p className="info__quantity">
                                <span>Quatity: </span>
                                <button
                                  className="Stinfo__button"
                                  onClick={() =>
                                    setQuantity((q) => (q <= 1 ? 1 : q - 1))
                                  }
                                >
                                  -
                                </button>{" "}
                                {quantity}
                                <button
                                  className="Stinfo__button"
                                  onClick={() =>
                                    setQuantity((quantity) => quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </p>
                            </li>

                            <li>
                              {" "}
                              <span>Select: </span>
                              <select>
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blue</option>
                              </select>
                            </li>

                            <li className="button--double">
                              <button
                                className="button-btn"
                                onClick={() =>
                                  alert("Product added to cart successfully")
                                }
                              >
                                Add to cart
                              </button>
                              <button
                                className="button-btn"
                                onClick={() => returnShop()}
                              >
                                Go back
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
