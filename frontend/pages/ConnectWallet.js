import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../constant";
import { ethers,  utils } from "ethers";


export const ConnectWallet = () => {
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));

      setIsAuthenticated(true)

    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  let getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: utils.formatEther(balance),
        });
      });
  };
  
  
 /*  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
  
    getbalance(account);
  }; */

  const accountChangeHandler = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceWei = await provider.getBalance(address);
      const balanceEther = formatEther(balanceWei);

      setdata({
        address: address,
        balance: balanceEther,
      })
    }
  }
  
  return (
    <div className="App">
      {/* Calling all values which we 
       have stored in usestate */}
  
      <div className="text-center">
        {!isAuthenticated ?
          <div onClick={btnhandler} variant="primary">
              <img className="w-4 lg:w-6" src={images.wallet} />
          </div>
          :
          <div className="flex">
            <div className="block truncate w-20 text-white">
            <strong>{data.address}</strong>
          </div>
          </div>
        }
      </div>
    </div>
  );
};
 
