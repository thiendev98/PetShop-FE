import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ShopPage from "./components/ShopPage";
import ServicePage from "./components/ServicePage";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import SinglePost from "./components/singlePost/SinglePost";

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.state = {
      // Global
      page: "HomePage",
      rotateZImage: 0,
      widthofScreen: window.innerWidth,
      // Header
      cellContentService: [
        {
          key: "1",
          src: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/61251f6d2d3da7b991aa2c33_icon-1-services-veterinary-x-template.svg",
          title: "Dog per visit",
          content: "Lorem ipsum dolor sit amet, consectetur.",
        },
        {
          key: "2",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6c8e005e644f837998_icon-2-services-veterinary-x-template.svg",
          title: "Cat per visit",
          content: "Lorem ipsum dolor sit amet, consectetur.",
        },
        {
          key: "3",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6d9053c039b60f1aad_icon-3-services-veterinary-x-template.svg",
          title: "Pet path",
          content: "Lorem ipsum dolor sit amet, consectetur.",
        },
        {
          key: "4",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6ef670855342f2b829_icon-4-services-veterinary-x-template.svg",
          title: "Pet grooming",
          content: "Lorem ipsum dolor sit amet, consectetur.",
        },
      ],
      // Homepage
      cellOurService: [
        {
          key: "1",
          src: "https://uploads-ssl.webflow.com/611a94f7245a41cb2c0ce4d2/61251f6d2d3da7b991aa2c33_icon-1-services-veterinary-x-template.svg",
          title: "Dog per visit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
          price: "99 USD",
          duration: "1 hr",
        },
        {
          key: "2",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6c8e005e644f837998_icon-2-services-veterinary-x-template.svg",
          title: "Cat per visit",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
          price: "99 USD",
          duration: "1 hr",
        },
        {
          key: "3",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6d9053c039b60f1aad_icon-3-services-veterinary-x-template.svg",
          title: "Pet path",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
          price: "99 USD",
          duration: "1.5 hrs",
        },
        {
          key: "4",
          src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/61251f6ef670855342f2b829_icon-4-services-veterinary-x-template.svg",
          title: "Pet grooming",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.",
          price: "99 USD",
          duration: "1.8 hrs",
        },
      ],

      cellCustomerTestimonials: [
        {
          key: "1",
          img: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adaac537a1a088387200e_image-2-testimonials-veterinary-x-template-p-800.jpeg",
          title: "A team of vets you can trust",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
          name: "Kathie Corl",
          owner: "Molly's Owner",
        },
        {
          key: "2",
          img: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adaac1e724c3ef1243bb5_image-1-testimonials-veterinary-x-template.jpg",
          title: "A team of vets you can trust",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
          name: "Sophie Moore",
          owner: "Tommy's Owner",
        },
      ],

      // Articles and news
      cellArticlesNews1: [
        {
          key: "1",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template-p-1600.jpeg",
          title: "Dog toys: How to pick the best and the safest",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "2",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afac5d4780959fd62559c_image-5-blog-veterinary-x-template-p-1600.jpeg",
          title: "How to adopt a dog: Everything you need to know",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
      ],

      cellArticlesNews2: [
        {
          key: "1",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template-p-1600.jpeg",
          title: "Dog toys: How to pick the best and the safest",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "2",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afac5d4780959fd62559c_image-5-blog-veterinary-x-template-p-1600.jpeg",
          title: "How to adopt a dog: Everything you need to know",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "3",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afaad4c1e33360a83b748_image-4-blog-veterinary-x-template-p-1600.jpeg",
          title: "The best cat food, according to experts and veterinarians",
          tag: "Cats",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "4",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afa57d69b3631526d2172_image-2-blog-veterinary-x-template.jpg",
          title: "Why it is worth having your dog groomed professionally",
          tag: "Cats",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "5",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afa8f4ed1f62ac1898a80_image-3-blog-veterinary-x-template.jpg",
          title: "5 essential commands you can teach to your dog",
          tag: "Cats",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "6",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611af97ed136dcf23f0257d5_image-1-blog-veterinary-x-template.jpg",
          title: "My cat sleeps constantly, when should I worry about it?",
          tag: "Cats",
          day: "August 16, 2021",
          content: "",
        },
      ],
      cellArticlesNews: [
        {
          key: "1",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afadf790dc2a997dde426_image-6-blog-veterinary-x-template-p-1600.jpeg",
          title: "Dog toys: How to pick the best and the safest",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "2",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afac5d4780959fd62559c_image-5-blog-veterinary-x-template-p-1600.jpeg",
          title: "How to adopt a dog: Everything you need to know",
          tag: "Dogs",
          day: "August 16, 2021",
          content: "",
        },
        {
          key: "3",
          img: "https://assets.website-files.com/611a94f7245a41e60e0ce4e3/611afaad4c1e33360a83b748_image-4-blog-veterinary-x-template-p-1600.jpeg",
          title: "The best cat food, according to experts and veterinarians",
          tag: "Cats",
          day: "August 16, 2021",
          content: "",
        },
      ],
      // Service page
      typeServices: "",
      // Blog page
      typeBlogs: "",
      // Shop page
      myCart: [
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
      ],
      totalPrice: 77.94,
    };
  }

  selectPage = (Page) => {
    const PagePrev = this.state.page;
    if (Page !== PagePrev)
      this.setState({
        page: Page,
      });
  };

  updateServicesRender = (TypeServices) => {
    const typeServicesPrev = this.state.typeServices;
    if (TypeServices !== typeServicesPrev)
      this.setState({
        typeServices: TypeServices,
      });
  };

  updateBlogsRender = (TypeBlogs) => {
    const typeBlogsPrev = this.state.typeBlogs;
    if (TypeBlogs !== typeBlogsPrev)
      this.setState({
        typeBlogs: TypeBlogs,
      });
  };

  updateWindowDimensions = () => {
    this.setState({
      widthofScreen: window.innerWidth,
    });
  };

  addProduct = () => {};

  removeProduct = (index) => {
    let mycarts = [...this.state.myCart];
    let mycartDelete = { ...mycarts[index] };
    mycarts = mycarts.filter((_, i) => index !== i);
    // Update totalPrice = prevTotalPrice - priceProduct * quantity
    this.setState((prevState) => ({
      totalPrice: parseFloat(
        (
          prevState.totalPrice -
          mycartDelete.price * mycartDelete.quantity
        ).toFixed(2)
      ),
      myCart: mycarts,
    }));
  };

  updateQuantity = (index, mode) => {
    let mycarts = [...this.state.myCart];
    let mycart = { ...mycarts[index] };
    let priceProduct = mycart.price;
    let prevQuantity = mycart.quantity;
    mycart.quantity =
      mode === -1
        ? Math.max(prevQuantity - 1, 1)
        : Math.min(prevQuantity + 1, 99);
    // Update totalPrice = prevTotalPrice + priceProduct * (quantity - prevQuantity)
    this.setState((prevState) => ({
      totalPrice: parseFloat(
        (
          prevState.totalPrice +
          priceProduct * (mycart.quantity - prevQuantity)
        ).toFixed(2)
      ),
    }));
    mycarts[index] = mycart;
    this.setState({
      myCart: mycarts,
    });
  };

  componentDidMount = () => {
    window.addEventListener("load", this.updateWindowDimensions);
    window.addEventListener("resize", this.updateWindowDimensions);
    this.changeZImage = setInterval(() => {
      let rotateAngle = 0.1 + Math.random() * 0.3; // We want random number from 0.1 to 0.4
      this.setState((prevState) => ({
        rotateZImage:
          prevState.rotateZImage + rotateAngle > 360
            ? prevState.rotateZImage + rotateAngle - 360
            : prevState.rotateZImage + rotateAngle,
      }));
    }, 100);
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.updateWindowDimensions);
    window.removeEventListener("resize", this.updateWindowDimensions);
    clearInterval(this.changeZImage);
  };

  render() {
    return (
      <div>
        <Header
          selectPage={this.selectPage}
          updateServicesRender={this.updateServicesRender}
          updateBlogsRender={this.updateBlogsRender}
          cellContentService={this.state.cellContentService}
          widthofScreen={this.state.widthofScreen}
          myCart={this.state.myCart}
          totalPrice={this.state.totalPrice}
          removeProduct={this.removeProduct}
          updateQuantity={this.updateQuantity}
        />

        {
          /* Home page */
          this.state.page === "HomePage" && (
            <div>
              <HomePage
                selectPage={this.selectPage}
                updateServicesRender={this.updateServicesRender}
                updateBlogsRender={this.updateBlogsRender}
                cellOurService={this.state.cellOurService}
                cellCustomerTestimonials={this.state.cellCustomerTestimonials}
                cellArticlesNews={this.state.cellArticlesNews}
                rotateZImage={this.state.rotateZImage}
                widthofScreen={this.state.widthofScreen}
              />
            </div>
          )
        }

        {
          /* Shop page */
          this.state.page === "ShopPage" && (
            <ShopPage
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
              addProduct={this.state.addProduct}
            />
          )
        }

        {
          /* Service page */
          this.state.page === "ServicePage" && (
            <ServicePage
              typeServices={this.state.typeServices}
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
            />
          )
        }

        {
          /* Blog page */
          this.state.page === "BlogPage" && (
            <BlogPage
              selectPage={this.selectPage}
              typeBlogs={this.state.typeBlogs}
              cellArticlesNews1={this.state.cellArticlesNews1}
              cellArticlesNews2={this.state.cellArticlesNews2}
              cellArticlesNews={this.state.cellArticlesNews}
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
            />
          )
        }

        {
          /* About page */
          this.state.page === "AboutPage" && (
            <AboutPage
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
            />
          )
        }

        {
          /* Contact page */
          this.state.page === "ContactPage" && (
            <ContactPage
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
            />
          )
        }

        {
          /* SinglePost page */
          this.state.page === "SinglePost" && (
            <SinglePost
              rotateZImage={this.state.rotateZImage}
              widthofScreen={this.state.widthofScreen}
            />
          )
        }

        <Footer
          selectPage={this.selectPage}
          rotateZImage={this.state.rotateZImage}
        />
      </div>
    );
  }
}
