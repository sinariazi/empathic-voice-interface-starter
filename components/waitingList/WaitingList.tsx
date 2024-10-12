import React from 'react';
import './SubscribeComponent.css'; // Assuming this file has the styles for your "subscribe" component.

const WaitingList = () => {
  return (
    <div className="subscribe-container">
      <h2>Waiting List</h2>
      <form
        action="https://gmail.us22.list-manage.com/subscribe/post?u=3d5f4e43e5bf5811dd3f13e28&amp;id=2b82c179f2&amp;v_id=88&amp;f_id=0038d1e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="subscribe-form"
      >
        <div className="form-field">
          <label htmlFor="mce-EMAIL">Email Address <span>*</span></label>
          <input type="email" name="EMAIL" id="mce-EMAIL" required />
        </div>

        <div className="form-field">
          <label htmlFor="mce-FNAME">First Name</label>
          <input type="text" name="FNAME" id="mce-FNAME" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-LNAME">Last Name</label>
          <input type="text" name="LNAME" id="mce-LNAME" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-ADDRESS-addr1">Address</label>
          <input type="text" name="ADDRESS[addr1]" id="mce-ADDRESS-addr1" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-ADDRESS-city">City</label>
          <input type="text" name="ADDRESS[city]" id="mce-ADDRESS-city" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-ADDRESS-state">State/Province</label>
          <input type="text" name="ADDRESS[state]" id="mce-ADDRESS-state" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-ADDRESS-zip">Postal Code</label>
          <input type="text" name="ADDRESS[zip]" id="mce-ADDRESS-zip" />
        </div>

        <div className="form-field">
          <label htmlFor="mce-ADDRESS-country">Country</label>
          <select name="ADDRESS[country]" id="mce-ADDRESS-country">
            <option value="USA">USA</option>
            {/* Add other country options here */}
          </select>
        </div>

        <div className="form-field">
          <button type="submit" className="subscribe-button">
            Join the Waiting List
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitingList;
