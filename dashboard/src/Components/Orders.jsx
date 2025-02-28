import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrdersChart from "./StackedBarChart";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://stockexchange-pfdh.onrender.com/allOrders")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        {allOrders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <>
            <div className="order-list">
              <table>
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((stock) => (
                    <tr key={stock._id}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>₹{stock.price}</td>
                      <td
                        className={
                          stock.mode === "BUY" ? "buy-mode" : "sell-mode"
                        }
                      >
                        {stock.mode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row"></div>

            <div className="orders-chart">
              <h3>Order Summary (BUY vs SELL)</h3>
              <OrdersChart orders={allOrders} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Orders;
