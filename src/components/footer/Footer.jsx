import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                We will be important, interesting, but because occasionally circumstances occur in which toil and pain can procure him some great. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it. We currently have in the train comes to find fault with that produces no resultant pleasure is to be online applications. These cases are perfectly account of the system, they are at fault quae workshop to leave softens recommend you.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <p style={{paddingTop:40, opacity:0.5}}>copyright©Manvendra 2023</p>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;