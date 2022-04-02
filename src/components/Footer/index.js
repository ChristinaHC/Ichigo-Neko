import React from "react";

function Footer(props) {
    return (
        <div className="footer-basic" id="contact-me">
            <footer>
                <div className="column"></div>
                <div className="social">
                    <a href="https://www.instagram.com/aerithnagasue/">
                        <i className="icon ion-social-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/christina-crabtree/">
                        <i className="icon ion-social-linkedin"></i>
                    </a>
                    <a href="https://github.com/nickperel">
                        <i className="icon ion-social-github"></i>
                    </a>
                </div>
                <ul className="list-inline">
                    <li><a href="mailto:borrowedandblue@gmail.com">Email</a></li>
                    <br />
                    <li>Cell: 908-343-9433</li>
                </ul>
                <p className="copyright">IchigoNeko Portfolio © 2022</p>

            </footer>
        </div>
    );
}

export default Footer;