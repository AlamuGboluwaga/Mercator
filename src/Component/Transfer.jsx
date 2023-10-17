import React, { useEffect, useRef, useState } from "react";
import Logo from "../images/logo2.svg";
import Avatar from "../images/avatar.jpeg";
const Transfer = () => {
  const accountType = [
    {
      accountNumber: "0131422969",
      accountName: "Premier Savings",
      availableBalance: "4359765",
    },
    {
      accountNumber: "0614129913",
      accountName: "Gold Current",
      availableBalance: "14359324",
    },
    {
      accountNumber: "0001293126",
      accountName: "Early Savers",
      availableBalance: "10159289",
    },
  ];


  const [data, setData] = useState({
    num: "",
    naration: "",
    select: "",
  });
  const [banks, setBanks] = useState();
  const inputRef = useRef(null);
  const fetchBanks = async () => {
    const res = await fetch("https://api.paystack.co/bank");
    const data = await res.json();

    setBanks(data);
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  return (
    <div className="userprofile-div">
      <div className="user-right-div">
        <div className="first-div">
          <div className="greetings">Hello, Dayo</div>
          <div className="email">
            <span className="user-image-span">
              <img src={Avatar} alt="UserPhoto" className="user-image" />
            </span>{" "}
            <span className="customer-name">Dayo Temidayo</span>
            <p className="customer-email">temeidayodayo@gmail.com</p>
          </div>
        </div>
        <div className="second-div">
          <div className="customer-account">
            <select
              className="acct-type"
              onChange={(e) => setData({ ...data, select: e.target.value })}
              ref={inputRef}
            >
              <option value="Account">Select Account</option>
              <option value="Premier Savings">Premier Savings</option>
              <option value="Gold Current">Gold Current</option>
              <option value="Standard Current">Standard Current</option>
            </select>
            <ul className="acct-selected">
              <li className="acct-selected-list">{inputRef.current?.value}</li>
              <li className="acct-selected-list">
                {accountType[0].accountNumber}
              </li>
              <li className="acct-selected-list">
                {"\u20A6"}
                {accountType[0].availableBalance}
              </li>
            </ul>
          </div>

          <div className="resent-trans">
            <h3>Beneficiary's Details</h3>
            <div className="resent-acct">
              <label>Beneficiary Bank</label>
              <select className="bank-selection">
                {banks?.data.map((bank, index) => (
                  <option value="" key={index}>
                    {bank.name}
                  </option>
                ))}
                <option value="">Select Beneficiary Account Number</option>
              </select>
              <label htmlFor="">Beneficiary's Account Number </label>
              <input
                type="text"
                placeholder="Beneficiary Account Number"
                onChange={(e) => setData({ ...data, num: e.target.value })}
              />
              <label htmlFor="">Naration </label>
              <input
                type="text"
                placeholder="Naration"
                onChange={(e) => setData({ ...data, naration: e.target.value })}
              />
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
        <div className="third-div"></div>
      </div>
    </div>
  );
};

export default Transfer;
