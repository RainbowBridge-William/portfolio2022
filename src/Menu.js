import React from 'react';
import "./index.css";


function Menu() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./about.html">About</a>
              </li>
              <li>
                <a
                  href="https://github.com/RainbowBridge-William"
                  target="_blank">
                  Project
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/williamwanguw/"
                  target="_blank">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
