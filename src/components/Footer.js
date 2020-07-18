import React from "react";
import "./../App.css";

function Footer() {
  return (
    <div className="footer-container">
      
      <div class="page-wrapper"></div>
      <hr />
      <footer>
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              
              <p class="footer-para">
               Developer: <span className='my-name'> Junaid Qureshi</span>
              </p>
              <div class="contact">
                
              </div>
              <div class="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100041078220896"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/junaid-qureshi-34a180194/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/Junaid084869/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/developer-junaid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;