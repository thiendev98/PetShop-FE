import "./style.css"
import React from "react"
import 'font-awesome/css/font-awesome.min.css'
import logo from "../images/logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div id="footer">
                <div id="footer-wrapper">
                    <div id="footer-logo">
                        <div id="footer-content">
                            <div id="logo-img-text-footer">
                                <div id="logo-img-footer">
                                    <img src={logo} alt="Logo" />
                                </div>

                                <div id="logo-text-footer">
                                    Magic Pet
                                </div>
                            </div>

                            <div id="logo-slogan">
                                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nec nulla lacus.
                            </div>
                        </div>

                        <div id="footer-social-media">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <AiFillInstagram />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <FaYoutube />
                            </a>
                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" id="footer-social-media-link">
                                <RiWhatsappFill />
                            </a>
                        </div>
                    </div>

                    <div id="footer-menu-contact">
                        <div id="footer-menu-wrapper">
                            <div id="footer-menu-title">
                                Menu
                            </div>

                            <div id="footer-menu-content">
                                <div id="footer-menu-content-element">
                                    <div 
                                        id="footer-menu-content-element-text"
                                        onClick={() => this.props.selectPage("HomePage", "")}
                                    >
                                        Home
                                    </div>
                                </div>
                                <div id="footer-menu-content-element">
                                    <div 
                                        id="footer-menu-content-element-text"
                                        onClick={() => this.props.selectPage("ShopPage", "")}
                                    >
                                        Shop
                                    </div>
                                </div>
                                <div id="footer-menu-content-element">
                                    <div 
                                        id="footer-menu-content-element-text"
                                        onClick={() => this.props.selectPage("ServicePage", "")}
                                    >
                                        Services
                                    </div>
                                </div>

                                <div id="footer-menu-content-element">
                                    <div 
                                        id="footer-menu-content-element-text"
                                        onClick={() => this.props.selectPage("BlogPage", "")}
                                    >
                                        Blog
                                    </div>
                                </div>

                                <div id="footer-menu-content-element">
                                    <div 
                                        id="footer-menu-content-element-text"
                                        onClick={() => this.props.selectPage("AboutPage", "")}
                                    >
                                        About
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="footer-contact-wrapper">
                            <div id="footer-contact-wrapper-content">
                                <div id="footer-contact-wrapper-content-title">
                                    Contact us
                                </div>

                                <div id="footer-contact-wrapper-content-info">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b0c1fb8b13e651d9cc47e_icon-1-footer-contact-veterinary-x-template.svg"
                                        alt=""
                                        id="footer-contact-wrapper-content-info-logo"
                                    />

                                    <div id="footer-contact-wrapper-content-info-text">
                                        9400 S Normandie Ave #14 Los Angeles(CA), 90044
                                    </div>
                                </div>

                                <div id="footer-contact-wrapper-content-info">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611b0c1fd039ca2be43bfc52_icon-2-footer-contact-veterinary-x-template.svg"
                                        alt=""
                                        id="footer-contact-wrapper-content-info-logo"
                                    />

                                    <div id="footer-contact-wrapper-content-info-text">
                                        contact@vet.com
                                    </div>
                                </div>

                                <div id="footer-contact-wrapper-content-info">
                                    <img
                                        src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bc64be779fb1ef244e9e6_icon-3-footer-contact-veterinary-x-template.svg"
                                        alt=""
                                        id="footer-contact-wrapper-content-info-logo"
                                    />

                                    <div id="footer-contact-wrapper-content-info-text">
                                        (323) 238 - 0696
                                    </div>
                                </div>
                            </div>

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bca866f7c3c9dc9898101_shape-1-footer-veterinary-x-template.svg"
                                alt=""
                                id="footer-contact-wrapper-bg1"
                                style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                            />

                            <img
                                src="https://assets.website-files.com/611a94f7245a41cb2c0ce4d2/611bca86f713492fe7e3ee1e_shape-2-footer-veterinary-x-template.svg"
                                alt=""
                                id="footer-contact-wrapper-bg2"
                                style={{transform: "rotateZ(" + this.props.rotateZImage.toString() + "deg)"}}
                            />
                        </div>
                    </div>
                </div>

                <div id="footer-copyright-license">
                    <div id="footer-copyright">
                        Copyright ©2022 Magic Pet
                    </div>

                    <div id="footer-license">
                        Designed by&#160; <div id="footer-license-underline">Magic Dev</div> &#160;team
                    </div>
                </div>
            </div>
        );
    }
};