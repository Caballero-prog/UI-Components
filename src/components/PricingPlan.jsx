import "../styles/PricingPlan.css";

const PricingPlan = () => {
  return (
    <>
      <article className="pricing-plan">
        <h3 className="pricing-plan-title">Choose the right plan for you</h3>
        <p className="pricing-plan-description">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </article>
      <div className="pricing-cards-container">
        <section className="pricing-card">
          <h3 className="plan-name">Freelancer</h3>
          <p className="plan-description">
            The essentials to provide your best work for clients.
          </p>
          <div>
            <span className="plan-price">20€</span>
            <span className="plan-interval">/month</span>
          </div>
          <ul className="card-features">
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>5 Products</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Up to 1,000 subscribers</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Basic analytics</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>48-hour support response time</span>
            </li>
          </ul>
          <button className="buy-button">Buy plan</button>
        </section>
        <section className="pricing-card">
          <h3 className="plan-name">Startup</h3>
          <p className="plan-description">
            A plan that scales with your rapidly growing business.
          </p>
          <div>
            <span className="plan-price">30€</span>
            <span className="plan-interval">/month</span>
          </div>
          <ul className="card-features">
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>25 Products</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Up to 10,000 subscribers</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Advanced analytics</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>24-hour support response time</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Marketing automations</span>
            </li>
          </ul>
          <button className="buy-button">Buy plan</button>
        </section>
        <section className="pricing-card">
          <h3 className="plan-name">Enterprise</h3>
          <p className="plan-description">
            Dedicated support and infrastructure for your company.
          </p>
          <div>
            <span className="plan-price">40€</span>
            <span className="plan-interval">/month</span>
          </div>
          <ul className="card-features">
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>50 Products</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Unlimited subscribers</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Advanced analytics</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>1-hour, dedicated support response time</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Marketing automations</span>
            </li>
            <li className="feature">
              <i className="fa-solid fa-check"></i>
              <span>Custom reporting tools</span>
            </li>
          </ul>
          <button className="buy-button">Buy plan</button>
        </section>
      </div>
    </>
  );
};

export default PricingPlan;
