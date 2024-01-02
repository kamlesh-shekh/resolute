import React from "react";

export default function Repos() {
  return (
    <>
      <section className="section-m_tb">
        <div className="container">
          <div className="repos-grid">
            <div className="repos-Box-grid">
              <div className="box-up">
                <ReposBox data={{ number: 7, name: "Countries" }} />
              </div>
              <div>
                <ReposBox data={{ number: 50, name: "Cities" }} />
              </div>
              <div className="box-up">
                <ReposBox data={{ number: 100, name: "Features" }} />
              </div>
              <div>
                <ReposBox data={{ number: 750, name: "Outlets" }} />
              </div>
            </div>
            <div>
              <div className="repos-content">
                <h2>
                  What is <strong>RePOS?</strong>
                </h2>
                <img src="Assets\IMG\repos-line.png" alt="repos img" />
                <p>
                  RePOS is much more than just any other POS Software. It has
                  been conceived, designed and brought to reality by a team of
                  software experts. It serves all the requirements a restaurant
                  has in order to achieve its goal of customer satisfaction.
                </p>
                <p>
                  RePOS is a Full-featured POS software application that can
                  handle counter sales, inventory tracking, customer data
                  management, mobile connectivity, and robust integrations. It
                  is a solution for Casual / Fine Dine Restaurants, Quick Serve
                  Restaurants, Bakery, Cake Shops, Cafe / Coffee Shops, Ice
                  Cream / Juice Centers, Food Chains, Pizza Chains, Delivery
                  Kitchen, Food Trucks and so on!
                </p>
                <button className="btn">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ReposBox({ data }) {
  const { number, name } = data;
  return (
    <div className="repos-box">
      <h2 className="repose-font white-color">{number}+</h2>
      <p className="white-color">{name}</p>
    </div>
  );
}
