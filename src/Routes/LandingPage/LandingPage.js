import React from "react";
import "./LandingPage.css";
import basketicon from "../../icons/farmersbasket.svg";
import farmersicon from "../../icons/farmers-icon.svg";
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className="landing-page-main">
      <div className="landing-page-hero-container">
        <div className="landing-page-hero-content">
          <img src={basketicon} alt="farmersbasketicon" />
          <h1>Farmer's Bazaar</h1>
          <article>FIND FOOD FRESH FROM A FARM NEAR YOU</article>
          <p>
            Welcome to the farmer's bazaar, find or sell farm fresh products
            from local vendors.
          </p>
        </div>
      </div>
      <div className="landing-page-body-header">
        <h2>Who is this for?</h2>
      </div>
      <div className="landing-page-body">
        <div className="landing-page-how-it-works-container">
          <div className="landing-page-how-it-works-farmers">
            <img src={farmersicon} alt="" />
          </div>

          <div className="audience-cta">
            <h3>Farmers</h3>
            <p>
              Im a Farmer who wants to sell to local shoppers. Sign up below to
              get started.
            </p>
                      <Link className="landing-page-button" to="/login">
                          <h4>Sell local now</h4>
                      </Link>
          </div>
        </div>
        <div className="landing-page-how-it-works-container">
          <div className="landing-page-how-it-works-consumers">
            <img src={basketicon} alt="" />
          </div>
          <div className="audience-cta">
            <h3>Shoppers</h3>
            <p>
              Im a shopper who would like purchase fresh food from local
              farmers. Click below to shop local now.
            </p>
                      <Link className="landing-page-button" to="/inventory">
                          <h4>Shop local now</h4>
                        </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
