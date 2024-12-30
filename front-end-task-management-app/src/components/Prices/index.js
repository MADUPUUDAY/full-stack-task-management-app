import React from 'react';
import './index.css';

const Prices = () => {
  return (
    <div className="prices-container">
      <div className="price-card free">
        <h2 className="price-title">Free</h2>
        <h3 className="price-subtitle">For small projects</h3>
        <p className="price-users">Up to 10 users</p>
        <p className="price-value">$0 <span>/ month</span></p>
        <button className="price-button">Sign up</button>
        <hr />
        <ul className="price-options">
          <li><i className="fa fa-check"></i> 10 users</li>
          <li><i className="fa fa-check"></i> 1 project</li>
          <li><i className="fa fa-check"></i> 100 MB storage</li>
          <li><i className="fa fa-check"></i> Git & Subversion</li>
          <li><i className="fa fa-check"></i> Board</li>
          <li><i className="fa fa-check"></i> Issue Summaries</li>
          <li><i className="fa fa-check"></i> NEW</li>
        </ul>
      </div>

      <div className="price-card starter">
        <h2 className="price-title">Starter</h2>
        <h3 className="price-subtitle">For growing teams</h3>
        <p className="price-users">Up to 30 users</p>
        <p className="price-value">$35 <span>/ month</span></p>
        <button className="price-button">Start free trial</button>
        <hr />
        <ul className="price-options">
          <li><i className="fa fa-check"></i> 30 users</li>
          <li><i className="fa fa-check"></i> 5 projects</li>
          <li><i className="fa fa-check"></i> 1 GB storage</li>
          <li><i className="fa fa-check"></i> Git & Subversion</li>
          <li><i className="fa fa-check"></i> Board</li>
          <li><i className="fa fa-check"></i> Issue Summaries</li>
          <li><i className="fa fa-check"></i> NEW</li>
          <li><i className="fa fa-check"></i> Subtasking</li>
        </ul>
      </div>

      <div className="price-card standard">
        <h2 className="price-title">Standard</h2>
        <h3 className="price-subtitle">For mid-sized companies</h3>
        <p className="price-users">Unlimited users*</p>
        <p className="price-value">$100 <span>/ month</span></p>
        <button className="price-button">Start free trial</button>
        <hr />
        <ul className="price-options">
          <li><i className="fa fa-check"></i> Unlimited users*</li>
          <li><i className="fa fa-check"></i> 100 projects</li>
          <li><i className="fa fa-check"></i> 30 GB storage</li>
          <li><i className="fa fa-check"></i> Git & Subversion</li>
          <li><i className="fa fa-check"></i> Board</li>
          <li><i className="fa fa-check"></i> Issue Summaries</li>
          <li><i className="fa fa-check"></i> NEW</li>
          <li><i className="fa fa-check"></i> Subtasking</li>
          <li><i className="fa fa-check"></i> Gantt charts</li>
          <li><i className="fa fa-check"></i> Burndown chart</li>
          <li><i className="fa fa-check"></i> Issue templates</li>
        </ul>
      </div>

      <div className="price-card premium">
        <h2 className="price-title">Premium</h2>
        <h3 className="price-subtitle">For larger companies</h3>
        <p className="price-users">Unlimited users and projects*</p>
        <p className="price-value">$175 <span>/ month</span></p>
        <button className="price-button">Start free trial</button>
        <hr />
        <ul className="price-options">
          <li><i className="fa fa-check"></i> Unlimited users*</li>
          <li><i className="fa fa-check"></i> Unlimited projects</li>
          <li><i className="fa fa-check"></i> 100 GB storage</li>
          <li><i className="fa fa-check"></i> Git & Subversion</li>
          <li><i className="fa fa-check"></i> Board</li>
          <li><i className="fa fa-check"></i> Issue Summaries</li>
          <li><i className="fa fa-check"></i> NEW</li>
          <li><i className="fa fa-check"></i> Subtasking</li>
          <li><i className="fa fa-check"></i> Gantt charts</li>
          <li><i className="fa fa-check"></i> Burndown chart</li>
          <li><i className="fa fa-check"></i> Issue templates</li>
          <li><i className="fa fa-check"></i> Custom fields</li>
          <li><i className="fa fa-check"></i> Dedicated support</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
