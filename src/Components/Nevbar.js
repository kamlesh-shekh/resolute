import React from "react";
import { Link } from "react-router-dom";

export default function Nevbar() {
  const toggle = () => {
    document.querySelector(".header").classList.toggle("nav-open");
  };
  return (
    <>
      <header className="header container">
        <Link to="#">
          <img src="Assets\IMG\re-pos_logo.png" alt="logo" className="logo" />
        </Link>

        <nav className="main-nav">
          <ul className="menu">
            <li>
              <Link to="#">Tour</Link>
            </li>
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">RestroTrail</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#" className="nav-btn">
                Book A Demo
              </Link>
            </li>
          </ul>
        </nav>

        <button className="btn--mobile-nav" onClick={() => toggle()}>
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
        {/* <button className="btn--mobile-nav" onClick={() => toggle()}>
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button> */}
      </header>
      <hr></hr>
    </>
  );
}
