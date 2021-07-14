import React from 'react';
import '../Home_pageCSS/Footer.css';
import image1 from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <div className="Footer-container">
            <footer className="main-footer">
                <div className="footer-left">
                    <img className="image__footer" src={image1} alt=""/>
                    <div className="socials">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                        <a href="#"><i className="fa fa-tumblr"></i></a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2 className="tag-title">Products</h2>

                        <ul className="box">
                            <li className="tag"><a href="#">Laptop</a></li>
                            <li className="tag"><a href="#">Mouse</a></li>
                            <li className="tag"><a href="#">Keyboard</a></li>
                            <li className="tag"><a href="#">Ipad</a></li>
                            <li className="tag"><a href="#">IOS</a></li>
                            <li className="tag"><a href="#">Android</a></li>
                        </ul>
                    </li>

                    <li className="features">
                        <h2 className="tag-title">About Us</h2>

                        <ul className="box">
                            <li className="tag"><a href="#">Blog</a></li>
                            <li className="tag"><a href="#">Pricing</a></li>
                            <li className="tag"><a href="#">Sales</a></li>
                            <li className="tag"><a href="#">Certification</a></li>
                            <li className="tag"><a href="#">Customer Service</a></li>
            
                        </ul>
                    </li>

                    <li>
                        <h2 className="tag-title">Address</h2>

                        <ul className="box">
                            <li className="tag"><a href="#">Room 1519, F2 Building</a></li>
                            <li className="tag"><a href="#">KTX B, International of University</a></li>
                            <li className="tag"><a href="#">Linh Trung,</a></li>
                            <li className="tag"><a href="#">Thu Duc,</a></li>
                            <li className="tag"><a href="#">Ho Chi Minh City</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom">
                    <p>All Right reserved by &copy;conception 2020</p>
                </div>
            </footer>
        </div>
      
    );
};

export default Footer;
