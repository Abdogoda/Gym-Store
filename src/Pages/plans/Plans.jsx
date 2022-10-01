import React from "react";
import "./plans.css";
import { Link } from "react-router-dom";
import PlansIMG from "../../assets/images/header_bg_4.jpg";

function Plans() {
  return (
    <section>
      <div className="section_header">
        <div
          className="section_header_content"
          style={{ backgroundImage: `url(${PlansIMG})` }}
        >
          <h1>Membership Plans</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
            vel, soluta odio velit obcaecati animi corporis esse veniam debitis
            voluptatibus cupiditate, ducimus nostrum tempora commodi minus
            laborum nihil nisi.
          </p>
        </div>
      </div>
      <div className="container plans_container">
        <div className="plans_box">
          <h4>Silver Package</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veli.</p>
          <div className="plans_price">
            <h1>$29.99</h1>
            <h2>/mo</h2>
          </div>
          <h5>Features</h5>
          <p className="color_white">First Features</p>
          <p className="color_white">Second Features</p>
          <p className="color_white">Third Features</p>
          <p className="color_white">Fourth Features</p>
          <p className="color_light">Fifth Features</p>
          <p className="color_light">Sixth Features</p>
          <p className="color_light">Seventh Features</p>
          <p className="color_light">Eighth Features</p>
          <p className="color_light">Ninth Features</p>
          <p className="color_light">Tenth Features</p>
          <Link to="plans/plan1" className="btn">
            Choose Plan
          </Link>
        </div>
        <div className="plans_box">
          <h4>Gold Package</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veli.</p>
          <div className="plans_price">
            <h1>$49.99</h1>
            <h2>/mo</h2>
          </div>
          <h5>Features</h5>
          <p className="color_white">First Features</p>
          <p className="color_white">Second Features</p>
          <p className="color_white">Third Features</p>
          <p className="color_white">Fourth Features</p>
          <p className="color_white">Fifth Features</p>
          <p className="color_white">Sixth Features</p>
          <p className="color_white">Seventh Features</p>
          <p className="color_light">Eighth Features</p>
          <p className="color_light">Ninth Features</p>
          <p className="color_light">Tenth Features</p>
          <Link to="plans/plan2" className="btn">
            Choose Plan
          </Link>
        </div>
        <div className="plans_box">
          <h4>Platinum Package</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veli.</p>
          <div className="plans_price">
            <h1>$89.99</h1>
            <h2>/mo</h2>
          </div>
          <h5>Features</h5>
          <p className="color_white">First Features</p>
          <p className="color_white">Second Features</p>
          <p className="color_white">Third Features</p>
          <p className="color_white">Fourth Features</p>
          <p className="color_white">Fifth Features</p>
          <p className="color_white">Sixth Features</p>
          <p className="color_white">Seventh Features</p>
          <p className="color_white">Eighth Features</p>
          <p className="color_white">Ninth Features</p>
          <p className="color_white">Tenth Features</p>
          <Link to="plans/plan3" className="btn">
            Choose Plan
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Plans;
