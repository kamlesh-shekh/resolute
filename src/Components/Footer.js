import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const application = [
    "Fine Dine POS",
    "Pizzeria POS",
    "Ice Cream Parlor POS",
    "Food Trucks POS",
    "Quick Serve Restaurants POS",
    "Bars & Pubs POS",
    "Bakery & Confectionery POS",
    "Cafe & Lounges POS",
  ];

  const products = [
    "ReANALYSE - Reporting App",
    "ReECHO - Feedback App",
    "TabMyOrder - Realtime Ordering App",
  ];

  const getTouch = [
    { icon: "location-outline", name: "Visit Us" },
    { icon: "call-outline", name: "+91 76006 03011" },
    { icon: "mail-outline", name: "info@re-pos.in" },
    { icon: "star-outline", name: "Google Review" },
  ];

  const countrys = [
    "Assets/IMG/india_1.png",
    "Assets/IMG/ghana_2.png",
    "Assets/IMG/kuwait_3.png",
    "Assets/IMG/qatar_4.png",
    "Assets/IMG/mauritius_5.png",
    "Assets/IMG/united-arab-emirates_6.png",
  ];

  const footerCitys = [
    "India",
    "Ahemdabad",
    "Goa",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Surat",
    "Vadodara",
    "Saudi Arabia",
    "Jeddah",
    "Mauritius",
    "Kenya",
    "Nairobi",
    "AccraGhana",
    "Tanzania",
    "Uganda",
    "Mauritius",
    "Rwanda",
  ];

  const Quick = ["RestroTrail", "Career", "Integration", "Partners"];
  return (
    <>
      <section className="footer-mt">
        <div className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h4 className="white-color">Fine Dine POS</h4>

                {application.map((cur, i) => {
                  return <Applications items={cur} key={i} />;
                })}
              </div>

              <div>
                <div>
                  <h4>Products</h4>
                  {products.map((cur, i) => {
                    return (
                      <li key={i} className="li-mb ">
                        {cur}
                      </li>
                    );
                  })}
                </div>

                <div>
                  <h4>Quick Links</h4>
                  {Quick.map((cur, i) => {
                    return (
                      <li key={i} className="li-mb ">
                        {cur}
                      </li>
                    );
                  })}
                </div>
              </div>

              <div>
                <div>
                  <h4>Get In Touch</h4>
                  <ul>
                    {getTouch.map((cur, i) => {
                      const { icon, name } = cur;
                      return (
                        <li key={i} className="li-mb">
                          <span className="get-icon white-color">
                            <ion-icon name={icon}></ion-icon>
                          </span>
                          <Link to="#" className="white-color">
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="footer-social li-mb ">
                      <Link to="#" className="social-center">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </Link>
                      <Link to="#" className="social-center">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </Link>
                      <Link to="#" className="social-center">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </Link>
                      <Link to="#" className="social-center">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                      </Link>
                    </li>
                    <li className="country-flex">
                      {countrys.map((path, i) => {
                        return (
                          <img
                            src={path}
                            key={i}
                            alt="footer-img"
                            width="20%"
                          />
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="container">
            <div className="footer-city">
              {footerCitys.map((city, i) => {
                return (
                  <Link to="#" key={i} style={{ color: "white" }}>
                    {city}
                  </Link>
                );
              })}
            </div>
          </div>

          <hr></hr>

          <br></br>
          <p className="center white-color">
            © 2024 All Rights Reserved by RePOS.
          </p>
        </div>
      </section>
    </>
  );
}

function Applications({ items }) {
  return <li className="li-mb ">{items}</li>;
}
