import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [marginAvailable, setMarginAvailable] = useState(3740); // Dummy default value

  useEffect(() => {
    axios
      .get("https://stockexchange-pfdh.onrender.com/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      });

    axios
      .get("https://stockexchange-pfdh.onrender.com/allOrders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  const profitLoss = currentValue - totalInvestment;
  const profitPercentage = ((profitLoss / totalInvestment) * 100).toFixed(2);

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitLoss >= 0 ? "profit" : "loss"}>
              {profitLoss.toFixed(2)} <small>({profitPercentage}%)</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Orders ({orders.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{orders.length}</h3>
            <p>Orders placed</p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
