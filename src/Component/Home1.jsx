import React from 'react'
import Logo from "../images/logo2.svg";
const Home1 = () => {
  return (
    <div className="userprofile-div">
      <div className="user-left-div">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="menu-list">
          <li>Home</li>
          <li>Beneficiary</li>
          <li>Transactions</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="user-right-div">
        <div className="first-div">
          <div className="greetings">Hello Dayo</div>
          <div className="email">
            <span>image</span> <span>Dayo Temidayo</span>
            <p>temeidayodayo@gmail.com</p>
          </div>
        </div>
        <div className="second-div">
          <div className="customer-account">
            <select className="acct-type">
              <option value="Select Account">Select Account</option>
              <option value="Premier Savings">Premier Savings</option>
              <option value="Premier Savings">Premier Savings</option>
            </select>
          </div>
          <div className="resent-trans">
            <p>Resent Transactions</p>
            <div className="resent-acct">
              <div className="acct1">1</div>
              <div className="acct1">2</div>
              <div className="acct1">3</div>
              <div className="acct1">4</div>
            </div>
          </div>
        </div>
        <div className="third-div"></div>
      </div>
    </div>
  );
}

export default Home1