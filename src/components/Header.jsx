import "./style.css"
import logo from "../images/logo.png"
import React from "react"
import FontAwesome from "react-fontawesome"
import 'font-awesome/css/font-awesome.min.css'
import { RiCloseFill } from "react-icons/ri";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnterListOurService = this.onMouseEnterListOurService.bind(this);
        this.onMouseLeaveListOurService = this.onMouseLeaveListOurService.bind(this);
        this.state = {
            dropdownService: false,
            hoverDetailService: false,
            clickDetailServiceMobile: false,
            clickListCart: false,
            clickButtonMobile: false,
            hoverListDetailServices: [false, false, false, false],
            ratioImageInListDetailServices: [1.0, 1.0, 1.0, 1.0],
            rotateZIconDirection: 0,
            opacityHeader: 0,
            transYButtonClick: 0,
            rotateZButtonClickFirstBar: 0,
            opacitySecondBarButtonClick: "1",
        };
    }

    onMouseEnter = (typeMenu) => {
        switch (typeMenu) {
            case "Service":
                this.setState({ dropdownService: true });
                break;
            case "DetailService":
                this.setState({ hoverDetailService: true });
                break;
            case "ListCart":
                this.setState({ clickListCart: true });
                break;
            default:
                break;
        }
    }

    onMouseLeave = (typeMenu) => {
        switch (typeMenu) {
            case "Service":
                this.setState({ dropdownService: false });
                break;
            case "DetailService":
                this.setState({ hoverDetailService: false });
                break;
            case "ListCart":
                this.setState({ clickListCart: false });
                break;
            default:
                break;
        }
    }

    toggleButtonMobile = () => {
        let tempclickButtonMobile = this.state.clickButtonMobile;
        if (tempclickButtonMobile)
            this.setState({
                clickButtonMobile: false
            })
        else
            this.setState({
                clickButtonMobile: true
            })
    }

    toggleDetailServiceMobile = () => {
        let tempclickDetailServiceMobile = this.state.clickDetailServiceMobile;
        if (tempclickDetailServiceMobile)
            this.setState({
                clickDetailServiceMobile: false
            })
        else
            this.setState({
                clickDetailServiceMobile: true
            })
    }

    listenScrollEvent = (e) => {
        this.setState({
            opacityHeader: Math.min(0.00475 * window.scrollY, 0.95)
        });
    }

    onMouseEnterListOurService = (index) => {
        // Make a shallow copy of the items
        let hoverListDetailService = this.state.hoverListDetailServices;
        hoverListDetailService[index] = true
        this.setState({
            hoverListDetailServices: hoverListDetailService
        });
    }

    onMouseLeaveListOurService = (index) => {
        // Make a shallow copy of the items
        let hoverListDetailService = this.state.hoverListDetailServices;
        hoverListDetailService[index] = false
        this.setState({
            hoverListDetailServices: hoverListDetailService
        });
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);

        this.changesizeListDetailService = setInterval(() => {
            let scaleImageinList = 0.01 + Math.random() * 0.01; // We want random number from 0.01 to 0.02
            let ratioImageInListDetailService = this.state.ratioImageInListDetailServices;
            for (let i = 0; i < 4; i++) {
                if (this.state.hoverListDetailServices[i])
                    ratioImageInListDetailService[i] = Math.min(ratioImageInListDetailService[i] + scaleImageinList, 1.03)              
                else
                    ratioImageInListDetailService[i] = Math.max(ratioImageInListDetailService[i] - scaleImageinList, 1.0)              
            }
            this.setState({
                ratioImageInListDetailServices: ratioImageInListDetailService
            });
        }, 100)

        this.changeDirectionIcon = setInterval(() => {
            let rotateImageinList = 1 + Math.random() * 59; // We want random number from 1 to 60
            if (this.state.dropdownService || this.state.clickDetailServiceMobile)
                this.setState((prevState) => ({
                    rotateZIconDirection: Math.min(prevState.rotateZIconDirection + rotateImageinList, 180) 
                }));           
            else
                this.setState((prevState) => ({
                    rotateZIconDirection: Math.max(prevState.rotateZIconDirection - rotateImageinList, 0) 
                }));   
        }, 50)

        this.changeButtonClick = setInterval(() => {
            let moveTopBottomBar = 0.01 + Math.random() * 0.12; // We want random number from 0.01 to 0.13
            let rotateZTopBar = 1 + Math.random() * 6; // We want random number from 1 to 7
            let transYButtonClicks = this.state.transYButtonClick;
            let rotateZButtonClickFirstBars = this.state.rotateZButtonClickFirstBar;
            if (this.state.clickButtonMobile) {
                if (transYButtonClicks !== 6.5) {
                    if (transYButtonClicks + moveTopBottomBar < 6.5) 
                        this.setState((prevState) => ({
                            transYButtonClick: prevState.transYButtonClick + moveTopBottomBar
                        })); 
                    else
                        this.setState(() => ({
                            transYButtonClick: 6.5,
                            opacitySecondBarButtonClick: "0"
                        }));
                    
                }
                else if (rotateZButtonClickFirstBars !== 140) 
                    this.setState((prevState) => ({
                        rotateZButtonClickFirstBar: Math.min(prevState.rotateZButtonClickFirstBar + rotateZTopBar, 140) 
                    })); 
            }         
            else {
                if (rotateZButtonClickFirstBars !== 0) {
                    if (rotateZButtonClickFirstBars - rotateZTopBar > 0) 
                        this.setState((prevState) => ({
                            rotateZButtonClickFirstBar: prevState.rotateZButtonClickFirstBar - rotateZTopBar
                        })); 
                    else
                        this.setState(() => ({
                            rotateZButtonClickFirstBar: 0,
                            opacitySecondBarButtonClick: "1"
                        }));
                    
                }
                else if (transYButtonClicks !== 0)
                    this.setState((prevState) => ({
                        transYButtonClick: Math.max(prevState.transYButtonClick - moveTopBottomBar, 0) 
                    }));
            } 
        }, 1)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
        clearInterval(this.changesizeListDetailService);
        clearInterval(this.changeDirectionIcon);
        clearInterval(this.changeButtonClick);
    }

    render() {
        return (
            <div id="header">
                <div id="header-wrapper">
                    <div 
                        id="logo-img-text"
                        onClick={() => this.props.selectPage("HomePage", "")}
                    >
                        <div id="logo-img">
                            <img src={logo} alt="Logo" id="logo-img-small-device" />
                        </div>

                        <div id="logo-text">
                            Magic Pet
                        </div>
                    </div>

                    <div id="header-menu">
                        {this.props.widthofScreen >= 992 &&
                            <div id="header-menu-normal-list">
                                <div id="header-menu-normal-list-nav">
                                    <div 
                                        id="header-nav-cell"
                                        onClick={() => this.props.selectPage("HomePage")}
                                    >
                                        Home
                                    </div>

                                    <div 
                                        id="header-nav-cell"
                                        onClick={() => this.props.selectPage("ShopPage")}
                                    >
                                        Shop
                                    </div>

                                    <div id="header-service"
                                        onMouseEnter={() => this.onMouseEnter("Service")}
                                        onMouseLeave={() => this.onMouseLeave("Service")}
                                    >
                                        <div 
                                            id="title-direction-menu"
                                            style = {
                                                (this.state.dropdownService && !this.state.hoverDetailService)
                                                    ? {color: "#f97561"}
                                                    : {color: "#2c2524"}
                                            }>
                                            <div id="title-menu">
                                                Services
                                            </div>

                                            <div 
                                                id="direction-menu-wrapper"
                                                style={{transform: "rotateZ(-" + this.state.rotateZIconDirection.toString() + "deg)"}}
                                            >
                                                <FontAwesome name="angle-down" id="direction-menu" size="2x"/>
                                            </div>
                                        </div>
                                        {
                                            this.state.dropdownService &&
                                            <div id="extend-service">
                                                <div 
                                                    id="block-content"
                                                    onMouseEnter={() => this.onMouseEnter("DetailService")}
                                                    onMouseLeave={() => this.onMouseLeave("DetailService")}
                                                >
                                                    <div id="content-extend-service">
                                                        {
                                                            this.props.cellContentService.map((serviceCell, index) =>
                                                                <div 
                                                                    id="cell-content-service" 
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
                                                                        id="cell-content-service-img"
                                                                        style={{transform: "scale(" + this.state.ratioImageInListDetailServices[index].toString() 
                                                                                        + ")"}}
                                                                    />

                                                                    <div id="cell-content-service-description">
                                                                        <div 
                                                                            id="cell-content-service-description-title" 
                                                                            style={{color: "rgb(" 
                                                                                + String(20500 * this.state.ratioImageInListDetailServices[index] / 3 - 20368 / 3) 
                                                                                + ", " 
                                                                                + String(8000 * this.state.ratioImageInListDetailServices[index] / 3 - 7889 / 3) 
                                                                                + ", " 
                                                                                + String(6100 * this.state.ratioImageInListDetailServices[index] / 3 - 5992 / 3) 
                                                                                + ")"}}
                                                                        >
                                                                            {serviceCell.title}
                                                                        </div>
                                                                        <div id="cell-content-service-description-content">
                                                                            {serviceCell.content}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div> 
                                                </div>
                                            </div>
                                        }
                                    </div>

                                    <div 
                                        id="header-nav-cell"
                                        onClick={() => {
                                            this.props.selectPage("BlogPage");
                                            this.props.updateBlogsRender("");
                                        }}
                                    >
                                        Blog
                                    </div>

                                    <div 
                                        id="header-nav-cell"
                                        onClick={() => this.props.selectPage("AboutPage")}
                                    >
                                        About
                                    </div>

                                    <div id="header-nav-cell-mobile-phone">
                                        <div id="button-contact-us-mobile-phone">
                                            <div id="button-contact-us-mobile-phone-wrapper">
                                                Contact us
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        
                        <div id="header-commerce-cart">
                            <div 
                                id="header-commerce-cart-quantity"
                                onClick = {() => this.onMouseEnter("ListCart")}
                            >
                                Cart({this.props.myCart.length})
                            </div>
                            
                            <div 
                                id="header-commerce-cart-modal-wrapper"
                                style={
                                    this.state.clickListCart === true 
                                        ?
                                            {
                                                opacity: "1",
                                                display: "flex"
                                            }
                                        :
                                            {
                                                opacity: "0",
                                                display: "none"
                                            }
                                }
                            >
                                <div 
                                    id="header-commerce-cart-modal"
                                    style={
                                        this.state.clickListCart === true 
                                            ? {transform: "scale(1)"}
                                            : {transform: "none"}
                                    }
                                >
                                    <div id="header-commerce-cart-modal-title">
                                        <div id="header-commerce-cart-modal-title-text">
                                            Your cart
                                        </div>

                                        <div 
                                            id="header-commerce-cart-modal-remove-icon"
                                            onClick = {() => this.onMouseLeave("ListCart")}
                                        >
                                            <RiCloseFill />
                                        </div>
                                    </div>

                                    <div id="header-commerce-cart-modal-content">
                                        {
                                            this.props.myCart.length > 0 ?
                                                <div id="header-commerce-cart-modal-content-wrapper-non-empty">
                                                    <div id="header-commerce-cart-modal-content-list">
                                                        {
                                                            this.props.myCart.map((mycart, index) => 
                                                                <div id="header-commerce-cart-modal-content-list-wrapper" key={mycart.key}>
                                                                    <div id="header-commerce-cart-modal-content-list-detail-info">
                                                                        <div id="header-commerce-cart-modal-content-list-detail-info-img">
                                                                            <img
                                                                                src={mycart.img}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div id="header-commerce-cart-modal-content-list-detail-info-content">
                                                                            <div 
                                                                                id="header-commerce-cart-modal-content-list-detail-info-content-name"
                                                                            >
                                                                                {mycart.name}
                                                                            </div>

                                                                            <div id="header-commerce-cart-modal-content-list-detail-info-content-price">
                                                                                $ {mycart.price} USD
                                                                            </div>

                                                                            {this.props.widthofScreen > 479 &&
                                                                                <div id="header-commerce-cart-modal-content-list-detail-info-content-remove">
                                                                                    <div 
                                                                                        id="header-commerce-cart-modal-content-list-detail-info-content-remove-text"
                                                                                        onClick = {() => this.props.removeProduct(index)}
                                                                                    >
                                                                                        Remove
                                                                                    </div>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                    <form id="header-commerce-cart-modal-content-list-detail-info-quality">
                                                                        
                                                                        <div id="header-commerce-cart-modal-content-list-detail-info-quality-wrapper">
                                                                            <div id="header-commerce-cart-modal-content-list-detail-info-quality-value">
                                                                                {mycart.quantity}
                                                                            </div>

                                                                            <div id="header-commerce-cart-modal-content-list-detail-info-quality-btn-wrapper">
                                                                                <button 
                                                                                    id="header-commerce-cart-modal-content-list-detail-info-quality-btn" 
                                                                                    type="button" 
                                                                                    onClick={() => this.props.updateQuantity(index, -1)}
                                                                                >
                                                                                    - 
                                                                                </button>

                                                                                <button 
                                                                                    id="header-commerce-cart-modal-content-list-detail-info-quality-btn" 
                                                                                    type="button" 
                                                                                    onClick={() => this.props.updateQuantity(index, 1)}
                                                                                >
                                                                                    + 
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                        {this.props.widthofScreen <= 479 &&
                                                                            <div id="header-commerce-cart-modal-content-list-detail-info-content-remove">
                                                                                <div 
                                                                                    id="header-commerce-cart-modal-content-list-detail-info-content-remove-text"
                                                                                    onClick = {() => this.props.removeProduct(index)}
                                                                                >
                                                                                    Remove
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </form>
                                                                </div>
                                                            )
                                                        }
                                                    </div>

                                                    <div id="header-commerce-cart-modal-content-cost-btn">
                                                        <div id="header-commerce-cart-modal-content-cost-wrapper">
                                                            <div id="header-commerce-cart-modal-content-cost-wrapper-text">
                                                                Subtotal
                                                            </div>
                                                            <div id="header-commerce-cart-modal-content-cost-wrapper-value">
                                                                $ {this.props.totalPrice} USD
                                                            </div>
                                                        </div>
                                                        <div id="header-commerce-cart-modal-content-btn-wrapper">
                                                            Continue to checkout
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                <div id="header-commerce-cart-modal-content-wrapper-empty">
                                                    <div id="header-commerce-cart-modal-content-list">
                                                        No item found. 
                                                    </div>

                                                    <div id="header-commerce-cart-modal-content-btn">
                                                        <div 
                                                            id="header-commerce-cart-modal-content-btn-wrapper"
                                                            onClick = {() => this.props.selectPage("ShopPage")}
                                                        >
                                                            Pet Shop
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="menu-button-contact-detail-mobile">
                        <div 
                            id="button-contact-us"
                            onClick={() => this.props.selectPage("ContactPage")}
                        >
                            <div id="button-contact-us-wrapper">
                                Contact us
                            </div>
                        </div>

                        <div 
                            id="menu-button-detail-mobile"
                            onClick={() => this.toggleButtonMobile()}
                        >
                            {this.props.widthofScreen < 992 &&
                                <div id="menu-button-detail-mobile-icon">
                                    <div id="menu-button-detail-mobile-icon-wrapper">
                                        <div 
                                            id="menu-button-detail-mobile-icon-top"
                                            style={{transform: "translate3d(0px, " + this.state.transYButtonClick.toString() + "px, 0px) rotateZ(" 
                                                            + this.state.rotateZButtonClickFirstBar.toString() + "deg)"}}
                                        ></div>
                                        <div 
                                            id="menu-button-detail-mobile-icon-medium"
                                            style={{opacity: this.state.opacitySecondBarButtonClick}}
                                        ></div>
                                        <div 
                                            id="menu-button-detail-mobile-icon-bottom"
                                            style={{transform: "translate3d(0px, -" + this.state.transYButtonClick.toString() + "px, 0px) rotateZ(" 
                                                            + String(this.state.rotateZButtonClickFirstBar * 40 / 140) + "deg)"}}
                                        ></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    
                </div>

                <div 
                    id="bg-header"
                    style={{opacity: this.state.opacityHeader.toString()}}
                >

                </div>

                <div 
                    id="list-detail-by-mobile"
                    style= {
                        this.state.clickButtonMobile
                            ? {display: "block"}
                            : {display: "none"}
                    }
                >
                    {this.props.widthofScreen < 992 &&
                        <div id="header-menu-normal-list">
                            <div id="header-menu-normal-list-nav">
                                <div 
                                    id="header-nav-cell"
                                    onClick={() => {
                                        this.props.selectPage("HomePage", "");
                                        this.toggleButtonMobile();
                                    }}
                                >
                                    Home
                                </div>

                                <div 
                                    id="header-nav-cell"
                                    onClick={() => {
                                        this.props.selectPage("ShopPage", "");
                                        this.toggleButtonMobile();
                                    }}
                                >
                                    Shop
                                </div>

                                <div 
                                    id="header-service"
                                    onClick={() => this.toggleDetailServiceMobile()}
                                >
                                    <div 
                                        id="title-direction-menu"
                                        style = {
                                            (this.state.clickDetailServiceMobile)
                                                ? {color: "#f97561"}
                                                : {color: "#2c2524"}
                                        }>
                                        <div id="title-menu">
                                            Services
                                        </div>

                                        <div 
                                            id="direction-menu-wrapper"
                                            style={{transform: "rotateZ(-" + this.state.rotateZIconDirection.toString() + "deg)"}}
                                        >
                                            <FontAwesome name="angle-down" id="direction-menu" size="2x"/>
                                        </div>
                                    </div>
                                    {
                                        this.state.clickDetailServiceMobile &&
                                        <div id="extend-service">
                                            <div id="block-content">
                                                <div id="content-extend-service">
                                                    {
                                                        this.props.cellContentService.map((serviceCell, index) =>
                                                            <div 
                                                                id="cell-content-service" 
                                                                key={serviceCell.key}
                                                                onMouseEnter={() => this.onMouseEnterListOurService(index)}
                                                                onMouseLeave={() => this.onMouseLeaveListOurService(index)}
                                                                onClick={() => {
                                                                    this.props.selectPage("ServicePage");
                                                                    this.props.updateServicesRender(serviceCell.key);
                                                                    this.toggleButtonMobile();
                                                                }}
                                                            >
                                                                <img 
                                                                    src={serviceCell.src} 
                                                                    alt=""
                                                                    id="cell-content-service-img"
                                                                    style={{transform: "scale(" + this.state.ratioImageInListDetailServices[index].toString() 
                                                                                    + ")"}}
                                                                />

                                                                <div id="cell-content-service-description">
                                                                    <div 
                                                                        id="cell-content-service-description-title" 
                                                                        style={{color: "rgb(" 
                                                                            + String(20500 * this.state.ratioImageInListDetailServices[index] / 3 - 20368 / 3) 
                                                                            + ", " 
                                                                            + String(8000 * this.state.ratioImageInListDetailServices[index] / 3 - 7889 / 3) 
                                                                            + ", " 
                                                                            + String(6100 * this.state.ratioImageInListDetailServices[index] / 3 - 5992 / 3) 
                                                                            + ")"}}
                                                                    >
                                                                        {serviceCell.title}
                                                                    </div>
                                                                    <div id="cell-content-service-description-content">
                                                                        {serviceCell.content}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div> 
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div 
                                    id="header-nav-cell"
                                    onClick={() => {
                                        this.props.selectPage("BlogPage");
                                        this.props.updateBlogsRender("");
                                        this.toggleButtonMobile();
                                    }}
                                >
                                    Blog
                                </div>

                                <div 
                                    id="header-nav-cell"
                                    onClick={() => {
                                        this.props.selectPage("AboutPage");
                                        this.toggleButtonMobile();
                                    }}
                                >
                                    About
                                </div>

                                <div id="header-nav-cell-mobile-phone">
                                    <div 
                                        id="button-contact-us-mobile-phone"
                                        onClick={() => {
                                            this.props.selectPage("ContactPage");
                                            this.toggleButtonMobile();
                                        }}
                                    >
                                        <div id="button-contact-us-mobile-phone-wrapper">
                                            Contact us
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};