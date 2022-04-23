import React from "react";
import "./style.css";
import $ from "jquery";
export default function ContactPage() {
  var contacts = [
    {
      logo: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e7ffcb8e5232e904411bb_icon-1-contact-links-veterinary-x-template.svg",
      title: "(323) 238 - 0696",
    },
    {
      logo: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e7ffcf8baf455a050652a_icon-2-contact-links-veterinary-x-template.svg",

      title: "contact@vet.com",
    },
    {
      logo: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e7ffdb47e5ebb37791176_icon-3-contact-links-veterinary-x-template.svg",
      title: "9400 S Normandie Ave #14 ",
      address: "Los Angeles, CA",
    },
  ];
  var forms = [
    {
      name: "Name",
      pl: "Enter your name",
    },
    {
      name: "Email Address",
      pl: "example@gmail.com",
    },
    {
      name: "Phone Number",
      pl: "(123) 456 789",
    },
    {
      name: "Service",
      pl: "Ex. Cart Service",
    },
    {
      name: "Visit date",
      pl: "Day and Month",
    },
    {
      name: "Schedule",
      pl: "Ex. 9.00 AM",
    },
  ];
  var instagramImages = [
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg",
    "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg",
  ];
  var questions = [
    {
      question: "How can I make a reservation?",
      anwser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis faucibus et tincidunt varius tincidunt diam elementum. Proin eleifend aenean id purus ullamcorper pellentesque. Sit est arcu, orci faucibus dolor praesent euismod. Consectetur rhoncus urna venenatis, aliquam gravida faucibus tortor venenatis faucibus. Faucibus curabitur tempus est aliquet hendrerit. Proin eleifend aenean id purus ullamcorper pellentesque.",
    },
    {
      question: "What services do you offer?",
      anwser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis faucibus et tincidunt varius tincidunt diam elementum. Proin eleifend aenean id purus ullamcorper pellentesque. Sit est arcu, orci faucibus dolor praesent euismod. Consectetur rhoncus urna venenatis, aliquam gravida faucibus tortor venenatis faucibus. Faucibus curabitur tempus est aliquet hendrerit. Proin eleifend aenean id purus ullamcorper pellentesque.",
    },
    {
      question: "Do you offer urgent appointments?",
      anwser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis faucibus et tincidunt varius tincidunt diam elementum. Proin eleifend aenean id purus ullamcorper pellentesque. Sit est arcu, orci faucibus dolor praesent euismod. Consectetur rhoncus urna venenatis, aliquam gravida faucibus tortor venenatis faucibus. Faucibus curabitur tempus est aliquet hendrerit. Proin eleifend aenean id purus ullamcorper pellentesque.",
    },
    {
      question: "What is your staff experience?",
      anwser:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis faucibus et tincidunt varius tincidunt diam elementum. Proin eleifend aenean id purus ullamcorper pellentesque. Sit est arcu, orci faucibus dolor praesent euismod. Consectetur rhoncus urna venenatis, aliquam gravida faucibus tortor venenatis faucibus. Faucibus curabitur tempus est aliquet hendrerit. Proin eleifend aenean id purus ullamcorper pellentesque.",
    },
  ];
  const chooseQuestions = (index) => {
    $(".questions__answer--item").hide();
    if (index % 2 == 0) $(".questions__answer--item").css("text-align", "left");
    else $(".questions__answer--item").css("text-align", "justify");
    $(".questions__answer--item").fadeIn(1000);
  };
  return (
    <div id="contactpage">
      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="col-xl-5">
          <h1>Contact us</h1>
          <p>
            Porta nibh venenatis cras sed felis. Odio ut sem nulla pharetra diam
            sit. Tristique senectus et
          </p>
          {contacts.map((contact) => (
            <>
              <div id="contact__item">
                <img className="contact__logo" src={contact.logo} />
                <p
                  className="contact__title"
                  onClick={() =>
                    alert(
                      "Oops! Click-to-call links don't work on this device."
                    )
                  }
                >
                  {contact.title}
                  <br />
                  {contact.address}
                </p>
              </div>
            </>
          ))}
        </div>
        <div className="col-xl-6 contact__forms">
          {forms.map((forms) => (
            <div className="col-xl-6 forms--item">
              <span>{forms.name}</span>
              <br />
              <input type="text" placeholder={forms.pl} />
            </div>
          ))}
          <div className="col-xl-12 forms--item">
            <span>Massage</span>
            <br />
            <textarea placeholder="Write your massage here"></textarea>
          </div>
          <div className="col-xl-2 forms--item">
            <button
              onClick={() => alert("Information has been sent successfully")}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <img
            className="img__left"
            src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611d2f6790774775921ed7a2_shape-1-service-veterinary-x-template.svg"
          />
          <img
            className="img__right"
            src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e8a24a65599640462ab1b_shape-1-contact-veterinary-x-template.svg"
          />
          <img
            className="img__bottom"
            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a72ed123e79b3104d6_shape-1-testimonials-veterinary-x-template.svg"
          />
        </div>
      </div>
      <div id="askedQuestions">
        <header>Frequently Asked Questions</header>
        <p>
          Porta nibh venenatis cras sed felis. Odio ut sem nulla pharetra diam
          sit. Tristique senectus et netus et
        </p>
        <div className="content__questions">
          <div className="questions__asked">
            {questions.map((q, index) => (
              <>
                <p
                  className="questions--item"
                  onClick={() => chooseQuestions(index)}
                >
                  {q.question}
                </p>
              </>
            ))}
          </div>
          <div className="questions__answer">
            <p className="questions__answer--item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              faucibus et tincidunt varius tincidunt diam elementum. Proin
              eleifend aenean id purus ullamcorper pellentesque. Sit est arcu,
              orci faucibus dolor praesent euismod. Consectetur rhoncus urna
              venenatis, aliquam gravida faucibus tortor venenatis faucibus.
              Faucibus curabitur tempus est aliquet hendrerit. Proin eleifend
              aenean id purus ullamcorper pellentesque.
            </p>

            <div className="questions__delay"></div>
          </div>
        </div>
        <div>
          <img
            className="questions__img--left"
            src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e8c035125e213550d9027_shape-1-faqs-veterinary-x-template.svg"
          />
          <img
            className="questions__img--right"
            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a72ed123e79b3104d6_shape-1-testimonials-veterinary-x-template.svg"
          />
          <img
            className="questions__img--bottom"
            src="https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/611e8c0386a5314cae7c827c_shape-3-faqs-veterinary-x-template.svg"
          />
        </div>
      </div>
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
    </div>
  );
}
