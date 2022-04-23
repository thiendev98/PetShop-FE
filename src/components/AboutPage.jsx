import "./style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const FollowInstagram = () => {
  var instagramImages = [
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg",
  ];
  return (
    <div id="followInstagram">
      <header className="Ins__sologan">
        Follow us on{" "}
        <a className="Ins--link" href="https://www.instagram.com/">
          Instagram
        </a>
      </header>
      <section className="Ins__img">
        <div className="Ins__img--item">
          <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd84e89583c1bf70798_image-1-instagram-veterinary-x-template.jpg" />
        </div>
        <div className="Ins__img--item">
          <img src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd8e87f2d548f185c60_image-2-instagram-veterinary-x-template.jpg" />
        </div>
        <div className="Ins__img--item">
          <div>
            {instagramImages.map((img) => (
              <a>
                <img src={img} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listImageInInstagram = [
      {
        key: "0",
        id: "list-follow-in-instagram-image-size1",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd84e89583c1bf70798_image-1-instagram-veterinary-x-template.jpg",
      },
      {
        key: "1",
        id: "list-follow-in-instagram-image-size1",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd8e87f2d548f185c60_image-2-instagram-veterinary-x-template.jpg",
      },
      {
        key: "2",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg",
      },
      {
        key: "3",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg",
      },
      {
        key: "4",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg",
      },
      {
        key: "5",
        id: "list-follow-in-instagram-image-size2",
        src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg",
      },
    ];
    return (
      <div id="aboutpage">
        <section className="container my-5 py-4 ">
          <div className="row ">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold"> About us</h2>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim <br />
                veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </section>
        <div className="container " id="content-about-img">
          <div className="about-hero1">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c3fa161b0eeb21b392afb_image-1-about-hero-veterinary-x-template.jpg"
              alt=""
              id="img-1"
            />
          </div>
          <div className="about-hero2">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c3fa2314079b2d7d7effd_image-2-about-hero-veterinary-x-template.jpg"
              alt=""
              id="img-2"
            />
          </div>
          <div className="motion-1">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9352687080d77032c_shape-1-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-3"
            />
          </div>
          <div className="motion-2">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9d8fd85380ba9d7a8_shape-2-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-4"
            />
          </div>
          <div className="motion-3">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9f43e10a328cc5197_shape-3-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-5"
            />
          </div>
          <div className="motion-4">
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611c40c9e8b1934eeeb78bd8_shape-4-about-hero-veterinary-x-template.svg"
              alt=""
              id="img-6"
            />
          </div>
        </div>

        <section className="container my-5 py-4">
          <div className="row">
            <div className="col-md-6 ">
              <h2 className="display-5 fw-bold">
                The story behind our vet practice
              </h2>
              <p className="lead mb-4 ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                consectetur lacus, suspendisse non gravida.
                <br />
                <br />
                Nec leo amet pellentesque ultrices pretium. Egestas ac nulla in
                enim lacinia sed feugiat neque. Nulla cursus ornare sit
                scelerisque dolor sit amet.
              </p>
            </div>
            {/* For Images */}
            <div id="the-story" className="col-md-6 mx-auto ">
              <img
                src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c45857d86d3dd1523f913_image-1-story-veterinary-x-template.jpg"
                alt=""
                height="300px"
                width="420px"
                id="the-story-pic"
              />
            </div>
          </div>
        </section>

        <section className="container my-5 py-4">
          <div className="row">
            <div id="our-core" className="col-md-6 mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4586e8b1937943b7b0ee_image-2-story-veterinary-x-template.jpg"
                alt=""
                height="300px"
                width="420px"
                id="our-core-pic"
              />
            </div>

            <div className="col-md-6">
              <h2 className="display-5 fw-bold">
                Our core mission at Veterinary X
              </h2>
              <p className="lead mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                ornare purus, mauris massa nisi, habitasse velit tristique. Sed
                nec purus quis ac, dolor. Dignissim commodo ipsum nibh
                consectetur lacus, suspendisse non gravida.
                <br />
                <br />
                Nec leo amet pellentesque ultrices pretium. Egestas ac nulla in
                enim lacinia sed feugiat neque. Nulla cursus ornare sit
                scelerisque dolor sit amet.
              </p>
            </div>
          </div>
        </section>

        <section id="value">
          <div className="container my-5 py-4">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="display-5 fw-bold">Our values</h2>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916f50ae00986842597_icon-1-values-veterinary-x-template.svg"
                        className="img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fs-3 fw-bold">Trust</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecteturol adipiscing
                          elit. Donec nunc nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916917b9136d77467ba_icon-2-values-veterinary-x-template.svg"
                        className="img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fs-3 fw-bold">Integrity</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecteturol adipiscing
                          elit. Donec nunc nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c4916c72868034f86491e_icon-3-values-veterinary-x-template.svg"
                        className="img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fs-3 fw-bold">Quality</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecteturol adipiscing
                          elit. Donec nunc nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 border-0">
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611c49152765e5e5039dda79_icon-4-values-veterinary-x-template.svg"
                        className="img-fluid"
                        alt="..."
                      ></img>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fs-3 fw-bold">Love</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecteturol adipiscing
                          elit. Donec nunc nulla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container my-3 py-2">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="display-5 fw-bold">
                  Meet the team that will take care of your little friend
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 pb-5">
                <div className="card text-center ">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <a href="https://www.facebook.com/">
                      <img
                        src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af6eaf8ec6c8fa91d75b0_image-1-team-veterinary-x-template.jpg"
                        className="card-img-top mx-auto p-2"
                        alt="..."
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">John Carter</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecteturol adipiscing elit.
                      Donec nunc nulla.
                    </p>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 pb-5">
                <div className="card text-center ">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <a href="https://www.facebook.com/">
                      <img
                        src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af6cdfe37cc507ba55d35_image-2-team-veterinary-x-template.jpg"
                        className="card-img-top mx-auto p-2"
                        alt="..."
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">Andy Smith</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecteturol adipiscing elit.
                      Donec nunc nulla.
                    </p>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5 pb-5">
                <div className="card text-center ">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <a href="https://www.facebook.com/">
                      <img
                        src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af5669643927b4a791bec_image-3-team-veterinary-x-template.jpg"
                        className="card-img-top mx-auto p-2"
                        alt="..."
                      />
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">Mike Warren</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecteturol adipiscing elit.
                      Donec nunc nulla.
                    </p>
                    <button>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FollowInstagram />
      </div>
    );
  }
}
