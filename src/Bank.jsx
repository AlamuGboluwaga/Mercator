import React, { useEffect, useState } from "react";
import Image from "./images/Finace Building.webp";

const Bank = () => {
  const [banks, setBanks] = useState();

  const fetchBanks = async () => {
    const res = await fetch("https://api.paystack.co/bank");
    const data = await res.json();
    setBanks(data);
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  console.log(banks?.data);

  return (
    <>
      <div className="banks-div">
        <div className="bank-left-div">
          <h1 className="transaction-title">Transfer with Ease</h1>
          
          <div className="transfer-details">
            <label htmlFor="" className="label">
              Beneficiary Bank
            </label>
            <div>
              <select className="select">
                {banks?.data.map((bank, index) => (
                  <option value="option1" key={index} className="options">
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="accounts"> */}
            <label htmlFor="" className="label">
              Beneficiary Account number
            </label>
            <input type="text" placeholder="Beneficiary Account number " />
            {/* </div> */}

            <label htmlFor="" className="label">
              Naration
            </label>
            <input type="text" placeholder="Beneficiary Account number " />
            <div className="trasfer-button">
              <button>Transfer</button>
            </div>
          </div>
        </div>

        <div className="bank-right-div">
          <div className="transaction-image">
            <img src={Image} alt="Images" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
