import React from "react";

export default function Hero() {
  return (
    <>
      <section className="section-m_tb">
        <div className="container">
          <div className="hero-rel">
            <div className="center hero-flex">
              <h3>Simple, Powerful & Affordable</h3>
              <h1 className="hero-h1">POS SOFTWARE SOLUTION</h1>
              <h3>For All Restaurant Types</h3>
            </div>
            <button className="btn hero-btn">Book A Demo</button>
            <div className="hero-bg-img">
              <img src="Assets\IMG\Header.png" alt="hero bg" />
            </div>
          </div>
          <div className="hero-bg-up"></div>
        </div>
      </section>
    </>
  );
}
