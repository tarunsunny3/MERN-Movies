import React from 'react'

const Footer = () => {
    return (
        <div>
             <footer id="footer" className="footer">
        <div className="footer-content">
            <div className="footer-section about">
                <h1>Contact Me</h1>
                <div className="contact">
                    <span><i className="fas fa-phone">&nbsp; +918886555591</i></span>
                    <span><i className="fas fa-envelope">&nbsp; tarunsunny3@gmail.com</i></span>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/tarunsunny111"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/tarunsunny115/"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/tarunsunny3/"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="footer-bottom">&copy;Tarun apps.com</div>
        </div>

      </footer>
        </div>
    )
}

export default Footer
