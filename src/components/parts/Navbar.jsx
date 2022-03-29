import React from "react";
import navbarLogoWhite from "../../assets/images/logo-white.webp";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar__logo">
            <a href="/">
              <img src={navbarLogoWhite} alt="Logo" />
            </a>
          </div>
          <div className="navbar__link">
            <ul>
              <li>
                <a href="/">footwear</a>
              </li>
              <li>
                <a href="/">non-footwear</a>
              </li>
              <li>
                <a href="/">collectors edition</a>
              </li>
              <li>
                <a href="/">reseller wholesale</a>
              </li>
              <li>
                <a href="/">upcoming product</a>
              </li>
              <li>
                <a href="/">repair product</a>
              </li>
            </ul>
          </div>
          <div className="navbar__right">
            <a href="/">
              <svg role="presentation" viewBox="0 0 20 20">
                <g
                  transform="translate(1 1)"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="square"
                >
                  <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                  <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                </g>
              </svg>
            </a>
            <a href="/">
              <svg role="presentation" viewBox="0 0 21 21">
                <g
                  transform="translate(1 1)"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="square"
                >
                  <path d="M18 18l-5.7096-5.7096"></path>
                  <circle cx="7.2" cy="7.2" r="7.2"></circle>
                </g>
              </svg>
            </a>
            <a href="/">
              <svg role="presentation" viewBox="0 0 19 23">
                <path
                  d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
