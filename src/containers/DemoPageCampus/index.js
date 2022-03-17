import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  faPhone,
  faMagnifyingGlass,
  faGraduationCap,
  faBook,
  faLaptop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class DemoPageCampus extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header__container">
            <div className="header__contact">
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +040 354 658 252
              </p>
            </div>
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <button class="btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar__container">
            <a className="navbar__brand" href="/">
              <h1>Campus</h1>
            </a>
            <div className="navbar__link">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="banner__container">
            <h3>Education is the key to unlock the golden door of freedom</h3>
            <div className="banner__grids">
              <div className="banner__grid">
                <FontAwesomeIcon icon={faGraduationCap} />
                <h4>Corporis</h4>
              </div>
              <div className="banner__grid">
                <FontAwesomeIcon icon={faBook} />
                <h4>Suscipit</h4>
              </div>
              <div className="banner__grid">
                <FontAwesomeIcon icon={faLaptop} />
                <h4>Laboriosam</h4>
              </div>
              <div className="banner__grid">
                <FontAwesomeIcon icon={faUser} />
                <h4>Voluptate</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
