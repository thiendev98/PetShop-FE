import { Component } from "react";
import "./style.css";
class ScheduleVisit extends Component {
  render() {
    // const newLocal = "";
    return (
      <div>
        {/* <p>assasdas</p> */}
        <div className="split-content service-sidebar">
          <div className="service-visit-form-wrapper">
            <div
              id="i5990f270"
              //  style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;"
              className="card service-visit-form"
            >
              <div className="card-service-form-content-top">
                <h2 className="title h4-size card-service-form">
                  Schedule a visit
                </h2>
                <p className="paragraph card-service-form">
                  Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit.
                </p>
              </div>
              <div className="service-form-block w-form">
                <form
                  id="wf-form-Service-Form"
                  name="wf-form-Service-Form"
                  data-name="Service Form"
                  method="get"
                  className="service-form"
                  aria-label="Service Form"
                >
                  <input
                    type="text"
                    className="input w-input"
                    maxlength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Full name"
                    id="name"
                    required=""
                  />
                  <input
                    type="email"
                    className="input w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Email address"
                    id="email"
                    required=""
                  />
                  <input
                    type="number"
                    className="input w-input"
                    maxlength="256"
                    name="Day"
                    data-name="Day"
                    placeholder="Day of the month"
                    id="day"
                    required=""
                  />
                  <div className="select-wrapper">
                    <select
                      id="schedule"
                      name="Schedule"
                      data-name="Schedule"
                      required=""
                      className="select w-select"
                    >
                      <option value="">Select schedule</option>
                      <option value="First">9:00 am</option>
                      <option value="Second">11:00 am</option>
                      <option value="Third">1:00 pm</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select
                      id="service"
                      name="Service"
                      data-name="Service"
                      required=""
                      className="select w-select"
                    >
                      <option value="">Select your service</option>
                      <option value="First">Pet grooming</option>
                      <option value="Second">Pet bath</option>
                      <option value="Third">Cat pet visit</option>
                      <option value="Fourth">Dog pet visit</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="button-primary full-width w-button"
                  />
                </form>
                {/* <div
                  className="success-message w-form-done"
                  tabindex="-1"
                  role="region"
                  aria-label="Service Form success"
                >
                  <div>
                    Your schedule has been submitted. <br />
                    We will get back to you within 24-48 hours.
                  </div>
                </div> */}
                {/* <div
                  className="error-message w-form-fail"
                  tabindex="-1"
                  role="region"
                  aria-label="Service Form failure"
                >
                  <div>Oops! Something went wrong.</div>
                </div> */}
              </div>
            </div>
            <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611d2f6790774775921ed7a2_shape-1-service-veterinary-x-template.svg"
              loading="eager"
              id="image_yellow"
              // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(186.919deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d; will-change: transform;"
              data-w-id="6540ad39-91b5-655c-396a-4913641230b6"
              alt=""
              className="image shape card-service-form-shape-1"
            />
            {/* <img
              src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611d2f675ebb4454abc440fc_shape-2-service-veterinary-x-template.svg"
              loading="eager"
              // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(266.832deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d; will-change: transform;"
              data-w-id="29dbe95d-7f0b-8a3e-4380-540c50efafbc"
              alt=""
              className="image shape card-service-form-shape-2"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleVisit;
