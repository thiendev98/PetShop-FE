import "./style.css";
import React from "react";
import ScheduleVisit from "./ScheduleVisit";
export default class ServicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seeInfo: 1 };
  }
  serciveName = ["Dog per visit", "Cat per visit", "Pet bath", "Pet groom"];
  classNameForService = [
    "service-tab-link w-inline-block w-tab-link w--current",
    "service-tab-link w-inline-block",
    "service-tab-link w-inline-block",
  ];
  render() {
    return (
      <div className="container-default w-container">
        <div className="service-wrapper">
          {/* {this.props.typeServices !== "" && (
            <div id="servicepage">
              This is service page with type of service is{" "}
              {this.props.typeServices}.
            </div>
          )}
          {this.props.typeServices === "" && (
            <div id="servicepage">
              This is service page with type of service is NULL.
            </div>
          )} */}
          <div className="container">
            {/* <img
              src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              width={100}
              alt="cat"
            /> */}
            <div className="row">
              <div
                className={
                  this.props.widthofScreen > 991 ? "col col-8" : "col col-12"
                }
              >
                <img
                  src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af380b7ac3b34a7a73c68_icon-1-services-veterinary-x-template.svg"
                  loading="eager"
                  alt="Dog pet visit"
                  class="image service"
                />
                <h1 className="title service">
                  {this.serciveName[this.props.typeServices - 1]}
                </h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores autem, impedit officiis nisi vitae error atque alias
                fuga animi asperiores vel provident quas reiciendis architecto
                quos similique minus, nesciunt debitis?
                <div className="service-about-content">
                  <div className="service-tag">
                    <img
                      src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd91b62c25936eac2f2b_icon-1-service-veterinary-x-template.svg"
                      loading="eager"
                      alt="Money - Veterinary X Webflow Template"
                      className="image service-tag-icon"
                    />{" "}
                    <div>99</div>
                    <div>&nbsp;USD</div>
                  </div>
                  <div className="service-tag">
                    <img
                      src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd9194fa2e2ebdfdf085_icon-2-service-veterinary-x-template.svg"
                      loading="eager"
                      alt="Clock Icon - Veterinary X Webflow Template"
                      className="image service-tag-icon"
                    />
                    <div>1 hr</div>
                  </div>
                </div>
                <div className="divider service"></div>
                {this.props.widthofScreen <= 991 && <ScheduleVisit />}
                {/* <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="col "
                /> */}
                <div className="service-content-bottom">
                  <div
                    data-duration-in="300"
                    data-duration-out="100"
                    data-current="About"
                    data-easing="ease"
                    className="service-tabs w-tabs"
                  >
                    <div
                      className="service-tabs-menu w-tab-menu"
                      role="tablist"
                    >
                      <a
                        data-w-tab="About"
                        className={this.classNameForService[0]}
                        id="w-tabs-0-data-w-tab-0"
                        // href=""
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-0"
                        aria-selected="true"
                        onClick={() => {
                          this.classNameForService[0] =
                            "service-tab-link w-inline-block w-tab-link w--current";
                          this.classNameForService[1] =
                            "service-tab-link w-inline-block";
                          this.classNameForService[2] =
                            "service-tab-link w-inline-block";
                          this.setState({ seeInfo: 1 });
                        }}
                      >
                        <div>About</div>
                      </a>
                      <a
                        data-w-tab="What's included?"
                        className={this.classNameForService[1]}
                        id="w-tabs-0-data-w-tab-1"
                        // href="#w-tabs-0-data-w-pane-1"
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-1"
                        aria-selected="false"
                        tabindex="-1"
                        onClick={() => {
                          this.classNameForService[1] =
                            "service-tab-link w-inline-block w-tab-link w--current";
                          this.classNameForService[0] =
                            "service-tab-link w-inline-block";
                          this.classNameForService[2] =
                            "service-tab-link w-inline-block";
                          this.setState({ seeInfo: 2 });
                        }}
                      >
                        <div>What's included?</div>
                      </a>
                      <a
                        data-w-tab="FAQs"
                        className={this.classNameForService[2]}
                        id="w-tabs-0-data-w-tab-2"
                        // href="#w-tabs-0-data-w-pane-2"
                        role="tab"
                        aria-controls="w-tabs-0-data-w-pane-2"
                        aria-selected="false"
                        tabindex="-1"
                        onClick={() => {
                          this.classNameForService[2] =
                            "service-tab-link w-inline-block w-tab-link w--current";
                          this.classNameForService[1] =
                            "service-tab-link w-inline-block";
                          this.classNameForService[0] =
                            "service-tab-link w-inline-block";
                          this.setState({ seeInfo: 3 });
                        }}
                      >
                        <div>FAQs</div>
                      </a>
                    </div>
                    <div className="service-tabs-content w-tab-content">
                      {this.state.seeInfo == 1 && (
                        <div
                          data-w-tab="About"
                          className="service-tab-pane w-tab-pane w--tab-active"
                          id="w-tabs-0-data-w-pane-0"
                        >
                          <div className="rich-text w-richtext">
                            <h2>About the service</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Semper nulla elementum, lobortis feugiat
                              cras rhoncus, sem est molestie. Quam nisi, purus
                              adipiscing dictumst fringilla. Lorem iaculis
                              imperdiet nisi auctor.{" "}
                              <strong>Sagittis quis</strong> curabitur morbi
                              tincidunt. Scelerisque nisi, odio. Bibendum
                              fringilla interdum placerat elit consectetur arcu.
                              Auctor nisi.
                            </p>
                            <ul>
                              <li>
                                Pretium nibh ipsum consequat nisl vel pretium.
                                Sed vulputate mi sit
                              </li>
                              <li>
                                Tristique nulla aliquet enim tortor at auctor
                                urna. Sit amet aliquam id diam maer &nbsp;dolore
                                eu fugiat nulla pariatur
                              </li>
                              <li>
                                Nam libero justo laoreet sit amet. Lacus sed
                                viverra tellus in hac
                              </li>
                              <li>
                                Tempus imperdiet nulla malesuada pellentesque
                                elit eget gravida cum
                              </li>
                            </ul>
                            <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                              <div>
                                <img
                                  src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af1e48deb424e6a3aa768_image-figure-services-veterinary-x-template.jpg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      )}
                      {this.state.seeInfo == 2 && (
                        <div
                          data-w-tab="What's included?"
                          className="service-tab-pane w-tab-pane"
                          id="w-tabs-0-data-w-pane-1"
                          role="tabpanel"
                          aria-labelledby="w-tabs-0-data-w-tab-1"
                          // style=""
                        >
                          <div className="rich-text w-richtext">
                            <h2>What's included?</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Semper nulla elementum, lobortis feugiat
                              cras rhoncus, sem est molestie. Quam nisi, purus
                              adipiscing dictumst fringilla. Lorem iaculis
                              imperdiet nisi auctor.{" "}
                              <strong>Sagittis quis</strong> curabitur morbi
                              tincidunt. Scelerisque nisi, odio. Bibendum
                              fringilla interdum placerat elit consectetur arcu.
                              Auctor nisi.
                            </p>
                            <ul>
                              <li>
                                Pretium nibh ipsum consequat nisl vel pretium.
                                Sed vulputate mi sit
                              </li>
                              <li>
                                Tristique nulla aliquet enim tortor at auctor
                                urna. Sit amet aliquam id diam maer &nbsp;dolore
                                eu fugiat nulla pariatur
                              </li>
                              <li>
                                Nam libero justo laoreet sit amet. Lacus sed
                                viverra tellus in hac
                              </li>
                              <li>
                                Tempus imperdiet nulla malesuada pellentesque
                                elit eget gravida cum
                              </li>
                            </ul>
                            <figure
                              // style="max-width:1512px"
                              className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                            >
                              <div>
                                <img
                                  src="https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af1e48deb424e6a3aa768_image-figure-services-veterinary-x-template.jpg"
                                  loading="lazy"
                                  alt=""
                                />
                              </div>
                            </figure>
                          </div>
                        </div>
                      )}
                      {this.state.seeInfo == 3 && (
                        <div
                          data-w-tab="FAQs"
                          className="service-tab-pane w-tab-pane"
                          id="w-tabs-0-data-w-pane-2"
                          role="tabpanel"
                          aria-labelledby="w-tabs-0-data-w-tab-2"
                          // style=""
                        >
                          <div className="service-faq-wrapper">
                            <div className="service-faq-content-top">
                              <h2 className="title h5-size service-faq">
                                How can I make a reservation?
                              </h2>
                              <div className="service-faq-icon-wrapper">
                                <div className="service-faq-icon-1"></div>
                                <div className="service-faq-icon-2"></div>
                              </div>
                            </div>
                            <div
                              className="service-faq-content-bottom"
                              // style="height: 0px; opacity: 0; transform: translate3d(0px, 100%, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;"
                            >
                              <div className="space service-faq"></div>
                              <p className="paragraph service-faq">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                          <div className="service-faq-wrapper">
                            <div className="service-faq-content-top">
                              <h2 className="title h5-size service-faq">
                                What services do you offer?
                              </h2>
                              <div className="service-faq-icon-wrapper">
                                <div className="service-faq-icon-1"></div>
                                <div className="service-faq-icon-2"></div>
                              </div>
                            </div>
                            <div
                              className="service-faq-content-bottom"
                              // style="height: 0px; opacity: 0; transform: translate3d(0px, 100%, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;"
                            >
                              <div className="space service-faq"></div>
                              <p className="paragraph service-faq">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                          <div className="service-faq-wrapper">
                            <div className="service-faq-content-top">
                              <h2 className="title h5-size service-faq">
                                Do you offer urgent appointments?{" "}
                              </h2>
                              <div className="service-faq-icon-wrapper">
                                <div className="service-faq-icon-1"></div>
                                <div className="service-faq-icon-2"></div>
                              </div>
                            </div>
                            <div
                              className="service-faq-content-bottom"
                              // style="height: 0px; opacity: 0; transform: translate3d(0px, 100%, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;"
                            >
                              <div className="space service-faq"></div>
                              <p className="paragraph service-faq">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                          <div className="service-faq-wrapper last">
                            <div className="service-faq-content-top">
                              <h2 className="title h5-size service-faq">
                                What is your staff experience?
                              </h2>
                              <div className="service-faq-icon-wrapper">
                                <div className="service-faq-icon-1"></div>
                                <div className="service-faq-icon-2"></div>
                              </div>
                            </div>
                            <div
                              className="service-faq-content-bottom"
                              // style="height: 0px; opacity: 0; transform: translate3d(0px, 100%, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; display: none;"
                            >
                              <div className="space service-faq"></div>
                              <p className="paragraph service-faq">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {this.props.children}
              </div>
              <div className="col col-4">
                {this.props.widthofScreen > 991 && <ScheduleVisit />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
