import React, { useState } from "react";
import $ from "jquery";
import "./style.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
function Page() {
  var about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
  const products = [
    {
      id: 1,
      name: "Small dog dish",
      image: img1,
      about: about,
      price: "10.99 USD",
    },
    {
      id: 2,
      name: "Small duck pet toy",
      image: img2,
      about: about,
      price: "9.99 USD",
    },
    {
      id: 3,
      name: "Small latex ball pet toy",
      image: img3,
      about: about,
      price: "9.99 USD",
    },
    {
      id: 4,
      name: "Pack of 2 dog bandanas",
      image: img4,
      about: about,
      price: "19.99 USD",
    },
    {
      id: 5,
      name: "Small yellow dog toy",
      image: img5,
      about: about,
      price: "9.99 USD",
    },
    {
      id: 6,
      name: "Small and medium dog brush",
      image: img6,
      about: about,
      price: "16.99 USD",
    },
  ];
  const showInfo = (index) => {
    $("#Page").hide();
    $("#Slider").hide();
    switch (index) {
      case 0: {
        $("#item--1").fadeIn(1000);
        break;
      }
      case 1: {
        $("#item--2").fadeIn(1000);
        break;
      }
      case 2: {
        $("#item--3").fadeIn(1000);
        break;
      }
      case 3: {
        $("#item--4").fadeIn(1000);
        break;
      }
      case 4: {
        $("#item--5").fadeIn(1000);
        break;
      }
      case 5: {
        $("#item--6").fadeIn(1000);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div id="Page">
      <div className="List__product">
        {products.map((product, index) => (
          <div key={product.id} onClick={() => showInfo(index)}>
            <div className="product__item">
              <img className="product__img" src={product.image} />
              <h2 className="product__name">{product.name}</h2>
              <p className="product__text">{product.about}</p>
              <p className="product__price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const Slider = () => {
  return (
    <>
      <section id="Slider">
        <h1>Shop</h1>
        <p className="Slider__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    </>
  );
};
const StInfo = () => {
  var about =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
  const returnShop = () => {
    $("#item--1").css("display", "none");
    $("#item--2").css("display", "none");
    $("#item--3").css("display", "none");
    $("#item--4").css("display", "none");
    $("#item--5").css("display", "none");
    $("#item--6").css("display", "none");
    $("#Slider").fadeIn(800);
    $("#Page").fadeIn(1000);
  };
  function addProduct() {
    alert("Product added to cart successfully");
  }
  const [quantity, setQuantity] = useState(1);
  const handleReduce = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  return (
    <>
      <div id="Stinfo__product">
        <div id="item--1">
          <div className="row">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img1} />
            </div>
            <div className="col-xl-6">
              <h2>Small dog fish</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                10,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>
              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div id="item--2">
          <div className="row">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img2} />
            </div>
            <div className="col-xl-6">
              <h2>Small duck pet toy</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                9,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>
              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div id="item--3">
          <div className="row">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img3} />
            </div>
            <div className="col-xl-6">
              <h2>Small and medium dog brush</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                16,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>
              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div id="item--4">
          <div className="row item--4">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img4} />
            </div>
            <div className="col-xl-6">
              <h2>Pack of 2 dog bandanas</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                19,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>
              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div id="item--5">
          <div className="row">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img5} />
            </div>
            <div className="col-xl-6">
              <h2>Small yellow dog toy</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                9,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>
              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div id="item--6">
          {" "}
          <div className="row">
            <div className="col-xl-6">
              <img className="Stinfo__img" src={img6} />
            </div>
            <div className="col-xl-6">
              <h2>Small latex ball pet toy</h2>
              <p
                className="Stinfo__price"
                style={{ fontWeight: "600", fontSize: "24px" }}
              >
                9,99 USD
              </p>
              <p style={{ fontSize: "20px" }}>{about}</p>
              <p className="Stinfo__quantity">
                <span>Quatity: </span>
                <button
                  className="Stinfo__button"
                  onClick={() => handleReduce()}
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
              <button onClick={() => addProduct()} className="button-btn">
                Add to cart
              </button>

              <button onClick={() => returnShop()} className="button-btn">
                Go back
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default function ShopPage() {
  return (
    <div id="shoppage">
      <StInfo />
      <Slider />
      <Page />
    </div>
  );
}
