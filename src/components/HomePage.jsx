import "./style.css"
import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import Slider from 'react-slick'
import GridSystem from './GridSystem';

function PrevArrowSlider(props) {
    const { style, onClick } = props;
    return (
        <div    
            id="carousel-list-client-description-direction-left"
            style={{ ...style}}
            onClick={onClick}
        >
            <div id="content-direction-carousel-service">
                &#10094;
            </div>
        </div>
    );
}

function ForwardArrowSlider(props) {
    const { style, onClick } = props;
    return (
        <div
            id="carousel-list-client-description-direction-right"
            style={{ ...style}}
            onClick={onClick}
        >
            <div id="content-direction-carousel-service">
                &#10095;
            </div>
        </div>
    );
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.forwardSlider = this.forwardSlider.bind(this);
        this.backwardSlider = this.backwardSlider.bind(this);
        this.onMouseEnterListOurService = this.onMouseEnterListOurService.bind(this);
        this.onMouseLeaveListOurService = this.onMouseLeaveListOurService.bind(this);
        this.onMouseEnterListArticlesNews = this.onMouseEnterListArticlesNews.bind(this);
        this.onMouseLeaveListArticlesNews = this.onMouseLeaveListArticlesNews.bind(this);
        this.onMouseEnterListFollowInstagram = this.onMouseEnterListFollowInstagram.bind(this);
        this.onMouseLeaveListFollowInstagram = this.onMouseLeaveListFollowInstagram.bind(this); 

        this.state = {
            hoverPersonContact: false,
            hoverPersonScheduling: false,
            hoverListOurServices: [false, false, false, false], // Dog Per Visit, Cat Per Visit, Pet Path, Pet Grooming
            slideIndex: 0,
            keynotEase: "-1",
            posXListOurServices: (this.props.widthofScreen >= 768) 
                            ? ["0px", "0px", "0px", "-2476px"] 
                            : ["0px", "0px", "0px", "calc(-400% - 320px)"], // Dog Per Visit, Cat Per Visit, Pet Path, Pet Grooming
            ratioImageInListOurServices: [1.0, 1.0, 1.0, 1.0], // Dog Per Visit, Cat Per Visit, Pet Path, Pet Grooming
            transXPersonContact: 0,
            transXImageOfPersonContact: 0,
            transXPersonScheduling: 0,
            transXImageOfPersonScheduling: 0,
            transYImageOfPersonScheduling: 0,
            hoverListArticlesNews: new Array(this.props.cellArticlesNews.length).fill(false),
            ratioImageInListArticlesNews: new Array(this.props.cellArticlesNews.length).fill(1.0),
            hoverListFollowInstagrams: new Array(6).fill(false),
            rotateZImageInListFollowInstagrams: new Array(6).fill(0) // Setting fix 6 images in follow in Instagram region
        };
    }

    onMouseEnter = (typeMenu) => {
        switch (typeMenu) {
            case "PersonContact":
                this.setState({ hoverPersonContact: true });
                break;
            case "PersonScheduling":
                this.setState({ hoverPersonScheduling: true });
                break;
            default:
                break;
        }
    }

    onMouseLeave = (typeMenu) => {
        switch (typeMenu) {
            case "PersonContact":
                this.setState({ hoverPersonContact: false });
                break;
            case "PersonScheduling":
                this.setState({ hoverPersonScheduling: false });
                break;
            default:
                break;
        }
    }

    forwardSlider = () => {
        const slideIndex = this.state.slideIndex;
        const windowWidth = this.props.widthofScreen;
        switch(slideIndex) {
            case 0:
                this.setState({
                    slideIndex: 1,
                    keynotEase: "4",
                    posXListOurServices: (windowWidth >= 768) 
                                            ? ["-619px", "-619px", "-619px", "-619px"] 
                                            : ["calc(-100% - 40px)", "calc(-100% - 40px)", "calc(-100% - 40px)", "calc(-100% - 40px)"] 
                });
                break;
            case 1:
                this.setState({
                    slideIndex: 2,
                    keynotEase: "1",
                    posXListOurServices: (windowWidth >= 768) 
                                            ? ["1238px", "-1238px", "-1238px", "-1238px"]
                                            : ["calc(200% + 80px)", "calc(-200% - 80px)", "calc(-200% - 80px)", "calc(-200% - 80px)"] 
                });
                break;
            case 2:
                this.setState({
                    slideIndex: 3,
                    keynotEase: "2",
                    posXListOurServices: (windowWidth >= 768) 
                                            ? ["619px", "619px", "-1857px", "-1857px"]
                                            : ["calc(100% + 40px)", "calc(100% + 40px)", "calc(-300% - 120px)", "calc(-300% - 120px)"] 
                });
                break;
            case 3:
                this.setState({
                    slideIndex: 0,
                    keynotEase: "3",
                    posXListOurServices: (windowWidth >= 768) 
                                            ? ["0px", "0px", "0px", "-2476px"]
                                            : ["0px", "0px", "0px", "calc(-400% - 320px)"] 
                });
                break;
            default:
                break;
        }
    }

    backwardSlider = () => {
        const slideIndex = this.state.slideIndex;
        const windowWidth = this.props.widthofScreen;
        switch(slideIndex) {
            case 0:
                this.setState({
                    slideIndex: 3,
                    keynotEase: "3",
                    posXListOurServices: (windowWidth >= 768) 
                                    ? ["619px", "619px", "-1857px", "-1857px"]
                                    : ["calc(100% + 40px)", "calc(100% + 40px)", "calc(-300% - 120px)", "calc(-300% - 120px)"] 
                });
                break;
            case 1:
                this.setState({
                    slideIndex: 0,
                    keynotEase: "4",
                    posXListOurServices: (windowWidth >= 768) 
                                    ? ["0px", "0px", "0px", "-2476px"]
                                    : ["0px", "0px", "0px", "calc(-400% - 320px)"]
                });
                break;
            case 2:
                this.setState({
                    slideIndex: 1,
                    keynotEase: "1",
                    posXListOurServices: (windowWidth >= 768) 
                                    ? ["-619px", "-619px", "-619px", "-619px"] 
                                    : ["calc(-100% - 40px)", "calc(-100% - 40px)", "calc(-100% - 40px)", "calc(-100% - 40px)"]
                });
                break;
            case 3:
                this.setState({
                    slideIndex: 2,
                    keynotEase: "2",
                    posXListOurServices: (windowWidth >= 768) 
                                    ? ["1238px", "-1238px", "-1238px", "-1238px"]
                                    : ["calc(200% + 80px)", "calc(-200% - 80px)", "calc(-200% - 80px)", "calc(-200% - 80px)"] 
                });
                break;
            default:
                break;
        }
    }

    onMouseEnterListOurService = (index) => {
        // Make a shallow copy of the items
        let hoverListOurService = this.state.hoverListOurServices;
        hoverListOurService[index] = true
        this.setState({
            hoverListOurServices: hoverListOurService
        });
    }

    onMouseLeaveListOurService = (index) => {
        // Make a shallow copy of the items
        let hoverListOurService = this.state.hoverListOurServices;
        hoverListOurService[index] = false
        this.setState({
            hoverListOurServices: hoverListOurService
        });
    }

    onMouseEnterListArticlesNews = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNew = this.state.hoverListArticlesNews;
        hoverListArticlesNew[index] = true
        this.setState({
            hoverListArticlesNews: hoverListArticlesNew
        });
    }

    onMouseLeaveListArticlesNews = (index) => {
        // Make a shallow copy of the items
        let hoverListArticlesNew = this.state.hoverListArticlesNews;
        hoverListArticlesNew[index] = false;
        this.setState({
            hoverListArticlesNews: hoverListArticlesNew
        });
    }

    onMouseEnterListFollowInstagram = (index) => {
        // Make a shallow copy of the items
        let hoverListFollowInstagram = this.state.hoverListFollowInstagrams;
        hoverListFollowInstagram[index] = true
        this.setState({
            hoverListFollowInstagrams: hoverListFollowInstagram
        });
    }

    onMouseLeaveListFollowInstagram = (index) => {
        // Make a shallow copy of the items
        let hoverListFollowInstagram = this.state.hoverListFollowInstagrams;
        hoverListFollowInstagram[index] = false
        this.setState({
            hoverListFollowInstagrams: hoverListFollowInstagram
        });
    }

    componentDidMount = () => {
        this.changesizeImageHoverPerson = setInterval(() => {
            let transPersonContactLength = 0.1 + Math.random() * 0.1; // We want random number from 0.1 to 0.2
            let transImageofPersonContactLength = 0.1 + Math.random() * 0.1; // We want random number from 0.1 to 0.2
            let transPersonSchedulingLength = 0.1 + Math.random() * 0.6; // We want random number from 0 to 0.7
            let transXImageofPersonSchedulingLength = 0.1 + Math.random() * 0.4; // We want random number from 0 to 0.5
            let transYImageofPersonSchedulingLength = 0.1 + Math.random() * 0.2; // We want random number from 0 to 0.3
            if (this.state.hoverPersonContact)
                this.setState((prevState) => ({
                    transXPersonContact: Math.max(prevState.transXPersonContact - transPersonContactLength, -7),
                    transXImageOfPersonContact: Math.min(prevState.transXImageOfPersonContact + transImageofPersonContactLength, 10)
                }))
            else
                this.setState((prevState) => ({
                    transXPersonContact: Math.min(prevState.transXPersonContact + transPersonContactLength, 0),
                    transXImageOfPersonContact: Math.max(prevState.transXImageOfPersonContact - transImageofPersonContactLength, 0)
                }))

            if (this.state.hoverPersonScheduling)
                this.setState((prevState) => ({
                    transXPersonScheduling: Math.max(prevState.transXPersonScheduling - transPersonSchedulingLength, -10),
                    transXImageOfPersonScheduling: Math.max(prevState.transXImageOfPersonScheduling - transXImageofPersonSchedulingLength, -7),
                    transYImageOfPersonScheduling: Math.max(prevState.transYImageOfPersonScheduling - transYImageofPersonSchedulingLength, -4)
                }))
            else
                this.setState((prevState) => ({
                    transXPersonScheduling: Math.min(prevState.transXPersonScheduling + transPersonSchedulingLength, 0),
                    transXImageOfPersonScheduling: Math.min(prevState.transXImageOfPersonScheduling + transXImageofPersonSchedulingLength, 0),
                    transYImageOfPersonScheduling: Math.min(prevState.transYImageOfPersonScheduling + transYImageofPersonSchedulingLength, 0)
                }))
        }, 100)

        this.changesizeListOurService = setInterval(() => {
            let scaleImageinList = 0.01 + Math.random() * 0.01; // We want random number from 0.01 to 0.02
            let ratioImageInListOurService = this.state.ratioImageInListOurServices;
            for (let i = 0; i < 4; i++) {
                if (this.state.hoverListOurServices[i])
                    ratioImageInListOurService[i] = Math.min(ratioImageInListOurService[i] + scaleImageinList, 1.05)              
                else
                    ratioImageInListOurService[i] = Math.max(ratioImageInListOurService[i] - scaleImageinList, 1.0)              
            }
            this.setState({
                ratioImageInListOurServices: ratioImageInListOurService
            });
        }, 100)

        this.changesizeListArticlesNews = setInterval(() => {
            let scaleImageinList = 0.01 + Math.random() * 0.0025; // We want random number from 0.01 to 0.0125
            let ratioImageInListArticlesNew = this.state.ratioImageInListArticlesNews;
            for (let i = 0; i < this.props.cellArticlesNews.length; i++) {
                if (this.state.hoverListArticlesNews[i])
                    ratioImageInListArticlesNew[i] = Math.min(ratioImageInListArticlesNew[i] + scaleImageinList, 1.05)              
                else
                    ratioImageInListArticlesNew[i] = Math.max(ratioImageInListArticlesNew[i] - scaleImageinList, 1.0)              
            }
            this.setState({
                ratioImageInListArticlesNews: ratioImageInListArticlesNew
            });
        }, 100)

        this.changesizeListFollowInstagram = setInterval(() => {
            let rotateImageinList = Math.random(); // We want random number from 0 to 1
            let rotateZImageInListFollowInstagram = this.state.rotateZImageInListFollowInstagrams;
            for (let i = 0; i < 6; i++) {
                if (this.state.hoverListFollowInstagrams[i])
                    rotateZImageInListFollowInstagram[i] = Math.min(rotateZImageInListFollowInstagram[i] + rotateImageinList, 3.0)              
                else
                    rotateZImageInListFollowInstagram[i] = Math.max(rotateZImageInListFollowInstagram[i] - rotateImageinList, 0.0)              
            }
            this.setState({
                rotateZImageInListFollowInstagrams: rotateZImageInListFollowInstagram
            });
        }, 100)
    }

    componentWillUnmount = () => {
        clearInterval(this.changesizeImageHoverPerson);
        clearInterval(this.changesizeListOurService);
        clearInterval(this.changesizeListArticlesNews);
        clearInterval(this.changesizeListFollowInstagram);
    }

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <ForwardArrowSlider />,
            prevArrow: <PrevArrowSlider />,
            centerMode: true,
            centerPadding: 0
        };

        const listImageInInstagram = [
            {
                key: "0",
                id: "list-follow-in-instagram-image-size1",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd84e89583c1bf70798_image-1-instagram-veterinary-x-template.jpg"
            },
            {
                key: "1",
                id: "list-follow-in-instagram-image-size1",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd8e87f2d548f185c60_image-2-instagram-veterinary-x-template.jpg"
            },
            {
                key: "2",
                id: "list-follow-in-instagram-image-size2",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaab6a6d295da10b78_image-3-instagram-veterinary-x-template.jpg"
            },
            {
                key: "3",
                id: "list-follow-in-instagram-image-size2",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd87d6b391f4fbc075b_image-4-instagram-veterinary-x-template.jpg"
            },
            {
                key: "4",
                id: "list-follow-in-instagram-image-size2",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcd81e724c8b91245a60_image-6-instagram-veterinary-x-template.jpg"
            },
            {
                key: "5",
                id: "list-follow-in-instagram-image-size2",
                src: "https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611adcdaea05ab4431b8db8f_image-5-instagram-veterinary-x-template.jpg"
            }
        ];

        return (
            <div>
                <div id="homepage">
                    <div id="homepage-wrapper">
                        <div id="content-homepage">
                            <div id="content-homepage-contact">
                                <div id="title-content-homepage-contact">
                                    A veterinary you and your little friend can trust
                                </div>

                                <div id="slogan-content-homepage-contact">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a feugiat cursus nisi, vel enim. Non et vitae dictum.
                                </div>

                                <div id="btn-homepage-contact">
                                    <div 
                                        id="btn-homepage-contact-wrapper"
                                        onClick={() => this.props.selectPage("ContactPage", "")}
                                    >
                                        Contact us
                                    </div>
                                </div>
                            </div>
                            <div id="content-homepage-img-contact">
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd0c1e9f99ae5c3b73851_image-home-hero-veterinary-x-template.png"
                                    alt=""
                                    id="bg-people-contact"
                                    onMouseEnter={() => this.onMouseEnter("PersonContact")}
                                    onMouseLeave={() => this.onMouseLeave("PersonContact")}
                                    style={{transform: "translate3d(" + this.state.transXPersonContact.toString() + "px, 0px, 0px)"}}
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b180864b4d576f3513_shape-1-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic1-motion"
                                    style={{transform: "translate3d(" + this.state.transXImageOfPersonContact.toString() + "px, 0px, 0px) rotateZ(" 
                                                        + this.props.rotateZImage.toString() + "deg)"}}
                                /> 
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b223d7828a82be485f_shape-2-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic2-motion"
                                    style={{transform: "translate3d(" + this.state.transXImageOfPersonContact.toString() + "px, 0px, 0px) rotateZ(" 
                                                        + this.props.rotateZImage.toString() + "deg)"}}
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b240f22c93fb2fa520_shape-3-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic3-motion"
                                    style={{transform: "translate3d(" + this.state.transXImageOfPersonContact.toString() + "px, 0px, 0px) rotateZ(" 
                                                        + this.props.rotateZImage.toString() + "deg)"}}
                                />
                                <img
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd2b133ed146af62ff13c_shape-4-home-hero-veterinary-x-template.svg"
                                    alt=""
                                    id="bg-pic4-motion"
                                    style={{transform: "translate3d(" + this.state.transXImageOfPersonContact.toString() + "px, 0px, 0px) rotateZ(" 
                                                        + this.props.rotateZImage.toString() + "deg)"}}
                                /> 
                            </div>
                        </div>
                    </div>
                    <img 
                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ac01f7f5b7907962d22b8_corner-1-home-hero-veterinary-x-template.svg"
                        alt=""
                        id="bg-corner-homepage-left"
                    />
                    <img 
                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ac01e014c10dfbdbd4181_corner-2-home-hero-veterinary-x-template.svg"
                        alt=""
                        id="bg-corner-homepage-right"
                    />
                </div>

                <div id="list-contact-info">
                    <div id="content-list-contact-info">
                        <div id="content-list-contact-info-wrapper">
                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d49619c65e80a2ee8e_icon-1-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Contact us
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="email-contact-info">
                                            contact@vet.com
                                        </div>

                                        <div id="tel-contact-info">
                                            (323) 238 - 0696
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d35218512a6abca7e1_icon-2-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Open hours
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="time-contact-info">
                                            <div id="time-contact-info-text">
                                                <strong>Mon - Fri:</strong> 8:00 AM to 5:00 PM
                                            </div>

                                            <div id="time-contact-info-text">
                                                <strong>Saturday:</strong> 9:00 AM to 3:00 PM
                                            </div>
                                            
                                            <div id="time-contact-info-text">
                                                <strong>Sunday:</strong> 9:00 AM to 2:00 PM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="col-contact-info">
                                <img 
                                    src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ab1d391631063e8b68894_icon-3-home-contact-veterinary-x-template.svg"
                                    alt=""
                                    id="logo-col-contact-info"
                                />
                                <div id="content-col-contact-info">
                                    <div id="title-content-col-contact-info">
                                        Location
                                    </div>

                                    <div id="des-content-col-contact-info">
                                        <div id="location-contact-info">
                                            9400 S Normandie Ave #14 Los Angeles, CA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="divider-home-page">
                    <div id="divider-home-page-wrapper">

                    </div>
                </div>

                <div id="list-service-info">
                    <div id="list-service-info-wrapper">
                        <div id="title-list-service-info">
                            Our services
                        </div>

                        <div id="carousel-service-info">
                            {
                                this.props.cellOurService.map((serviceCell, index) =>
                                    <div 
                                        id="cell-carousel-service-info-wrapper"
                                        style={
                                            this.state.keynotEase === serviceCell.key
                                                ? 
                                                    {
                                                        transform: "translateX(" + this.state.posXListOurServices[index] + ")",
                                                        transition: "transform 200ms ease 0s"
                                                    }
                                                : 
                                                    {
                                                        transform: "translateX(" + this.state.posXListOurServices[index] + ")",
                                                        transition: "transform 500ms ease 0s"
                                                    }
                                        }
                                        key={serviceCell.key}
                                    >
                                        <div 
                                            id="cell-carousel-service" 
                                            key={serviceCell.key}
                                            onMouseEnter={() => this.onMouseEnterListOurService(index)}
                                            onMouseLeave={() => this.onMouseLeaveListOurService(index)}
                                            onClick={() => {
                                                this.props.selectPage("ServicePage");
                                                this.props.updateServicesRender(serviceCell.key);
                                            }}
                                        >
                                            <img 
                                                src={serviceCell.src} 
                                                alt=""
                                                id="cell-carousel-service-img"
                                                style={{transform: "scale(" + this.state.ratioImageInListOurServices[index].toString() + ")"}}
                                            />

                                            <div id="cell-carousel-service-description">
                                                <div 
                                                    id="cell-carousel-service-description-title"
                                                    style={{color: "rgb(" + String(4100 * this.state.ratioImageInListOurServices[index] - 4056) 
                                                                + ", " + String(1600 * this.state.ratioImageInListOurServices[index] - 1563) 
                                                                + ", " + String(1220 * this.state.ratioImageInListOurServices[index] - 1184) + ")"}}
                                                >
                                                    {serviceCell.title}
                                                </div>
                                                <div id="cell-carousel-service-description-content">
                                                    {serviceCell.content}
                                                </div>
                                                <div id="cell-carousel-service-description-cost">
                                                    <div id="cell-carousel-service-description-cost-wrapper">
                                                        <img
                                                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd91b62c25936eac2f2b_icon-1-service-veterinary-x-template.svg"
                                                            alt=""
                                                            id="cell-carousel-service-description-cost-img"
                                                        />
                                                        {serviceCell.price}
                                                    </div>

                                                    <div id="cell-carousel-service-description-cost-wrapper">
                                                        <img
                                                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611afd9194fa2e2ebdfdf085_icon-2-service-veterinary-x-template.svg"
                                                            alt=""
                                                            id="cell-carousel-service-description-cost-img"
                                                        />
                                                        {serviceCell.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div 
                                id="left-direction-carousel-service"
                                onClick = {this.backwardSlider}
                            >
                                <div id="content-direction-carousel-service">
                                    &#10094;
                                </div>
                            </div>

                            <div 
                                id="right-direction-carousel-service"
                                onClick = {this.forwardSlider}
                            >
                                <div id="content-direction-carousel-service">
                                    &#10095;
                                </div>
                            </div>
                        </div>

                        <div id="list-btn-service-info-detail">
                            <div 
                                id="btn-service-info-detail-contact"
                                onClick={() => this.props.selectPage("ContactPage", "")}
                            >
                                Contact us
                            </div>

                            <div 
                                id="access-detail-service-info"
                                onClick={() => {
                                    this.props.selectPage("ServicePage");
                                    this.props.updateServicesRender("");
                                }}
                            >
                                Browse all services
                            </div>
                        </div>
                    </div>
                </div>

                <div id="list-brief-about-us-info">
                    <div id="list-brief-about-us-info-wrapper">
                        <div id="list-brief-about-us-info-image">
                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ade7e71b376349b1897b1_image-1-home-about-veterinary-x-template-p-800.jpeg"
                                alt=""
                                id="brief-about-us-info-image-1"
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ade7e113e5848965481f4_image-2-home-about-veterinary-x-template.jpg"
                                alt=""
                                id="brief-about-us-info-image-2"
                            />
                        </div>

                        <div id="list-brief-about-us-info-content">
                            <div id="brief-about-us-info-content-title">
                                About us
                            </div>

                            <div id="brief-about-us-info-content-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla ut lobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra. Facilisi sit mi sed mauris non iaculis elit fusce. Amet nunc in odio molestie lorem mi id a
                            </div>

                            <div id="brief-about-us-info-content-perk">
                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    Over 10 years of experience
                                </div>

                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    20 talented vets ready to help you
                                </div>

                                <div id="brief-about-us-info-content-perk-wrapper">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611ad4c394d47d115e076a98_icon-check-veterinary-x-template.svg"
                                        alt=""
                                        id="brief-about-us-info-content-perk-image"
                                    />
                                    High-quality products only
                                </div>
                            </div>

                            <div 
                                id="brief-about-us-info-content-btn"
                                onClick={() => this.props.selectPage("AboutPage", "")}
                            >
                                More about us
                            </div>
                        </div>
                    </div>
                </div>

                <div id="list-client-testimonials-about-us">
                    <div id="list-client-testimonials-about-us-wrapper">
                        <div id="list-client-testimonials-about-us-intro">
                            <div id="list-client-testimonials-about-us-title">
                                What our clients say about us
                            </div>

                            <div id="list-client-testimonials-about-us-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies felis feugiat elementum gravida. Facilisis libero aliquam curabitur.
                            </div>
                        </div>

                        <div id="carousel-list-client-testimonials">
                            <Slider {...settings}>
                                {
                                    this.props.cellCustomerTestimonials.map((testimonialsCell) =>
                                        <div id="cell-carousel-list-client-testimonials" key={testimonialsCell.key}>
                                            <div id="cell-carousel-list-client-testimonials-wrapper">
                                                <img
                                                    src={testimonialsCell.img}
                                                    alt=""
                                                    id="cell-carousel-list-client-img"
                                                />

                                                <div id="cell-carousel-list-client-description">
                                                    <div id="cell-carousel-list-client-description-title">
                                                        "{testimonialsCell.title}"
                                                    </div>

                                                    <div id="cell-carousel-list-client-description-content">
                                                        {testimonialsCell.description}
                                                    </div>

                                                    <div id="cell-carousel-list-client-description-info">
                                                        <div id="cell-carousel-list-client-description-info-name">
                                                            {testimonialsCell.name}
                                                        </div>

                                                        <div id="cell-carousel-list-client-description-info-owner">
                                                            {testimonialsCell.owner}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a72ed123e79b3104d6_shape-1-testimonials-veterinary-x-template.svg"
                                alt=""
                                id="bg-pic1-client-testimonials-carousel-decor"
                                style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a7c02126789ccbb2b6_shape-2-testimonials-veterinary-x-template.svg"
                                alt=""
                                id="bg-pic2-client-testimonials-carousel-decor"
                                style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                            />
                        </div>
                    </div>
                </div>

                <div id="schedule-appoint-by-contact-us">
                    <div id="schedule-appoint-by-contact-us-wrapper">
                        <div id="schedule-appoint-by-contact-us-content">
                            <div id="schedule-appoint-by-contact-us-slogan">
                                Schedule your appointment today
                            </div>

                            <div id="schedule-appoint-by-contact-us-btn">
                                <div 
                                    id="schedule-appoint-by-contact-us-btn-wrapper"
                                    onClick={() => this.props.selectPage("ContactPage", "")}
                                >
                                    Contact us
                                </div>
                            </div>
                        </div>

                        <div id="schedule-appoint-by-contact-us-image">
                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bdd0c22e3eb9e5bdf54d6_image-cta-veterinary-x-template.png"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-people"
                                onMouseEnter={() => this.onMouseEnter("PersonScheduling")}
                                onMouseLeave={() => this.onMouseLeave("PersonScheduling")}
                                style={{transform: "translate3d(" + this.state.transXPersonScheduling.toString() + "px, 0px, 0px)"}}
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd703e7c2ca23de784b97_shape-1-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg1"
                                style={{transform: "translate3d(" + this.state.transXImageOfPersonScheduling.toString() + "px, " 
                                                    + this.state.transYImageOfPersonScheduling.toString() + "px, 0px) rotateZ(" 
                                                    + this.props.rotateZImage.toString() + "deg)"}}
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd70415e0af6233e5c873_shape-2-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg2"
                                style={{transform: "translate3d(" + this.state.transXImageOfPersonScheduling.toString() + "px, " 
                                                    + this.state.transYImageOfPersonScheduling.toString() + "px, 0px) rotateZ(" 
                                                    + this.props.rotateZImage.toString() + "deg)"}}
                            />

                            <img                        
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd7058691cad89db7a3be_shape-3-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg3"
                                style={{transform: "translate3d(" + this.state.transXImageOfPersonScheduling.toString() + "px, " 
                                                    + this.state.transYImageOfPersonScheduling.toString() + "px, 0px) rotateZ(" 
                                                    + this.props.rotateZImage.toString() + "deg)"}}
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd7040d89378c71b67b80_shape-4-cta-veterinary-x-template.svg"
                                alt=""
                                id="schedule-appoint-by-contact-us-image-bg4"
                                style={{transform: "translate3d(" + this.state.transXImageOfPersonScheduling.toString() + "px, " 
                                                    + this.state.transYImageOfPersonScheduling.toString() + "px, 0px) rotateZ(" 
                                                    + this.props.rotateZImage.toString() + "deg)"}}
                            />
                        </div>
                    </div>

                    <div id="schedule-appoint-by-contact-us-background">
                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bd7042bb9691ca35d73f8_shape-5-cta-veterinary-x-template.svg"
                            alt=""
                            id="schedule-appoint-by-contact-us-image-bg5"
                            style={{transform: "translate3d(" + this.state.transXImageOfPersonScheduling.toString() + "px, " 
                                            + this.state.transYImageOfPersonScheduling.toString() + "px, 0px) rotateZ(" 
                                            + this.props.rotateZImage.toString() + "deg)"}}
                        />
                    </div>
                </div>

                <div id="list-articles-news-info">
                    <div id="list-articles-news-info-wrapper">
                        <div id="list-articles-news-info-title">
                            <div id="list-articles-news-info-title-text">
                                Our articles &#38; news
                            </div>

                            <div 
                                id="list-articles-news-info-title-btn"
                                onClick={() => {
                                    this.props.selectPage("BlogPage");
                                    this.props.updateBlogsRender("");
                                }}
                            >
                                Browse all articles
                            </div>
                        </div>

                        <div id="grid-articles-news-info">
                            <GridSystem colCount={3} md={12} xs={12} sm={12} lg={4}>
                                {this.props.cellArticlesNews.length > 0 ? 
                                    this.props.cellArticlesNews.map((ariticlesNews, index) => 
                                        <div 
                                            id="grid-articles-news-info-cell" 
                                            key={index}
                                            onMouseEnter={() => this.onMouseEnterListArticlesNews(index)}
                                            onMouseLeave={() => this.onMouseLeaveListArticlesNews(index)}
                                            onClick={() => {
                                                this.props.selectPage("BlogPage");
                                                this.props.updateBlogsRender(ariticlesNews.key);
                                            }}
                                        >
                                            <div id="grid-articles-news-info-cell-bg">
                                                <img
                                                    src={ariticlesNews.img} 
                                                    alt=""
                                                    id="grid-articles-news-info-cell-image"
                                                    style={{transform: "scale3d(" + this.state.ratioImageInListArticlesNews[index].toString() 
                                                                    + ", " + this.state.ratioImageInListArticlesNews[index].toString() + ", 1.0)"}}
                                                />

                                                <div id="grid-articles-news-info-cell-tag">
                                                    {ariticlesNews.tag}
                                                </div>
                                            </div>

                                            <div id="grid-articles-news-info-cell-content">
                                                <div 
                                                    id="grid-articles-news-info-cell-title"
                                                    style={{color: "rgb(" + String(4100 * this.state.ratioImageInListArticlesNews[index] - 4056)
                                                                + ", " + String(1600 * this.state.ratioImageInListArticlesNews[index] - 1563) + ", "
                                                                + String(1220 * this.state.ratioImageInListArticlesNews[index] - 1184) + ")"}}
                                                >
                                                    {ariticlesNews.title}
                                                </div>

                                                <div id="grid-articles-news-info-cell-detail">
                                                    <div id="grid-articles-news-info-cell-detail-click">
                                                        <div id="grid-articles-news-info-cell-detail-click-text">
                                                            Read more
                                                        </div>

                                                        <div 
                                                            id="grid-articles-news-info-cell-detail-click-direction"
                                                            style={{transform: "translate3d(" 
                                                                        + String(120 * this.state.ratioImageInListArticlesNews[index] - 120) 
                                                                        + "px, 0px, 0px)"}}
                                                        >
                                                            &#10140;
                                                        </div>  
                                                    </div>

                                                    <div id="grid-articles-news-info-cell-detail-date">
                                                        {ariticlesNews.day}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    : [<p>No news are found.</p>]}
                            </GridSystem>
                        </div>
                    </div>
                </div>

                <div id="list-follow-in-instagram">
                    <div id="list-follow-in-instagram-wrapper">
                        <div id="list-follow-in-instagram-title">
                            Follow us on&#160;
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>

                        <div id="grid-list-follow-in-instagram-image">
                            {
                                listImageInInstagram.map((listImage, index) => 
                                    <a 
                                        href="https://www.instagram.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        id={listImage.id}
                                        key={listImage.key}
                                        onMouseEnter={() => this.onMouseEnterListFollowInstagram(index)}
                                        onMouseLeave={() => this.onMouseLeaveListFollowInstagram(index)}
                                        style={{transform: "scale3d(" + String(this.state.rotateZImageInListFollowInstagrams[index] / 150 + 1)
                                                        + ", " + String(this.state.rotateZImageInListFollowInstagrams[index] / 150 + 1) 
                                                        + ", 1) rotateZ(" + this.state.rotateZImageInListFollowInstagrams[index].toString() + "deg)"}}
                                    >
                                        <img
                                            src={listImage.src}
                                            alt=""
                                            style={{transform: "scale3d(" + String(this.state.rotateZImageInListFollowInstagrams[index] / 100 + 1)
                                                    + ", " + String(this.state.rotateZImageInListFollowInstagrams[index] / 100 + 1) 
                                                    + ", 1)"}}
                                        />
                                    </a>
                                )
                            }
                        </div>

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b02494ed1f62ec189c397_shape-1-instagram-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg1"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b024a482dee6b2e1e340e_shape-2-instagram-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg2"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />

                        <img
                            src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b01a7c02126789ccbb2b6_shape-2-testimonials-veterinary-x-template.svg"
                            alt=""
                            id="list-follow-in-instagram-image-bg3"
                            style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                        />
                    </div>
                </div>
            </div>   
        );
    }
};