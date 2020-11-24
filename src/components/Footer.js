import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container-footer">
                <div className="contact-details">
                    <p>info@mpactionphoto.pl</p>
                    <p>tel:728 371 458</p>
                </div>
                <div className="icons">
                    <div className="icon"><a href="https://www.facebook.com/MP_actionphoto-114398969967783/?view_public_for=114398969967783"><img
                        src="./images/fb.svg" alt="FB" /></a></div>
                    <div className="icon"><a href="https://www.instagram.com/travedrenaline/?hl=pl"><img
                        src="./images/ig.svg" alt="IG" /></a></div>
                </div>
            </div>
            <div className="footer-final">
                <h6>&#169;2020 Agnieszka Piotrowska</h6>
            </div>
        </div>
)};

export default Footer;