import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./style.css";

function Page() {
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
  const showInfo = (index) => {
    var p = document.getElementsByClassName("list--product");
    $(".product__item").hide();
    $("#Slider").hide();
    $(p[index]).css("display", "flex");
  };
  return (
    <div id="Page">
      <div className="List__product">
        {products.map((product, index) => (
          <>
            <div>
              <div className="product__item" onClick={() => showInfo(index)}>
                <img className="product__img" src={product.img} />
                <h2 className="product__name">{product.name}</h2>
                <p className="product__text">{product.about}</p>
                <p className="product__price">{product.price} USD</p>
              </div>
            </div>
            <StInfo
              src={product.img}
              name={product.name}
              about={product.about}
              price={product.price}
            />
          </>
        ))}
      </div>
    </div>
  );
}

const StInfo = (props) => {
  const [quantity, setQuantity] = useState(1);
  const returnShop = () => {
    $(".list--product").css("display", "none");
    $("#Slider").fadeIn(800);
    $(".product__item").fadeIn(1000);
  };
  return (
    <>
      <div id="Stinfo__product">
        <div className="list--product">
          <div className="list--item">
            <img className="Stinfo__img" src={props.src} />
          </div>
          <div className="list--item">
            <h3>{props.name}</h3>
            <p
              className="Stinfo__price"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              10,99 USD
            </p>
            <p style={{ fontSize: "20px" }}>{props.about}</p>
            <p className="Stinfo__quantity">
              <span>Quatity: </span>
              <button
                className="Stinfo__button"
                onClick={() => setQuantity((q) => (q <= 1 ? 1 : q - 1))}
              >
                -
              </button>{" "}
              {quantity}
              <button
                className="Stinfo__button"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </p>
            <span>Select: </span>
            <select>
              <option>Green</option>
              <option>Red</option>
              <option>Blue</option>
            </select>
            <br />
            <button
              className="button-btn"
              onClick={() => alert("Product added to cart successfully")}
            >
              Add to cart
            </button>
            <button className="button-btn" onClick={() => returnShop()}>
              Go back
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default function ShopPage() {
  return (
    <div id="shoppage">
      <section id="Slider">
        <h1>Shop</h1>
        <p className="Slider__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Page />
    </div>
  );
}
