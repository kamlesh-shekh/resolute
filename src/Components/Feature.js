import React from "react";

export default function Feature() {
  const images = [
    {
      path: "Assets/IMG/feature_icon_01.png",
      name: "Point Of Sale",
      content:
        "Introducing a combination of unparalleled characteristics for managing your restaurant",
    },
    {
      path: "Assets/IMG/feature_icon_02.png",
      name: "Stock Management",
      content:
        "Helps you efficiently manage stock, unused items, reduce wastage and record new stock",
    },
    {
      path: "Assets/IMG/feature_icon_03.png",
      name: "Sales & Marketing",
      content:
        "Enables you to drive result oriented sales and marketing campaigns for your restaurant",
    },
    {
      path: "Assets/IMG/feature_icon_04.png",
      name: "Customer Relationship Tool",
      content:
        "Helps you analyse customer behavior and enables you to stay in touch with your customers",
    },
    {
      path: "Assets/IMG/feature_icon_05.png",
      name: "Franchise Management",
      content:
        "An exclusive feature for multichain restaurants or businesses operating on the franchisee model",
    },
    {
      path: "Assets/IMG/feature_icon_06.png",
      name: "Head Office Module",
      content:
        "Central management of overall functioning of menus, recipes, inventory, user roles & permissions",
    },
    {
      path: "Assets/IMG/feature_icon_07.png",
      name: "Reporting & Analytics",
      content:
        "Get powerful insights about your restaurant on-the-go and use it to improvise your business",
    },
    {
      path: "Assets/IMG/feature_icon_08.png",
      name: "Settings & Configuration",
      content:
        "Assists you in operating your business effectively with options that best suit your processes",
    },
  ];
  return (
    <>
      <section className="section-m_tb section-all-bg mb-0">
        <div className="container">
          <div className="feature-main">
            <div className="center">
              <h2>
                Explore our awesome<strong> Feature Set</strong>
              </h2>
              <img src="Assets\IMG\repos-line.png" alt="repos img" />
            </div>

            <div className="feature-grid">
              {images.map((cur, i) => {
                return <FeatureBox cur={cur} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureBox({ cur }) {
  const { path, name, content } = cur;
  return (
    <div className="feature-box">
      <img src={path} alt="feature" />
      <h5>{name}</h5>
      <p>{content}</p>
      <button className="btn">Know More</button>
    </div>
  );
}
