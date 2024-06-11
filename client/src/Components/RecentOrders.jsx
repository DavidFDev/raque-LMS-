import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const RecentOrders = () => {
  const { recentOrders } = useAuthContext();
  const [slicedOrders, setSlicedOrders] = useState([]);

  useEffect(() => {
    if (Array.isArray(recentOrders)) {
      setSlicedOrders(recentOrders.slice(0, 6) || []);
    } else {
      setSlicedOrders([]);
    } 
  }, [recentOrders]);
 
  return (
    <div className="order-form">
      <h3>Recent Orders</h3>
      <div className="main-table">
        <table className="table border text-center">
          <thead>
            <tr>
              <th>Order</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
            </tr>
          </thead>


          <tbody>
              { slicedOrders && slicedOrders > 0 ? 
                slicedOrders.map((item, i) => {
                  const { itemId, borrowDate, returnDate } = item;
                  return (
                    <tr key={i}>
                      <td style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                        {itemId}
                      </td>
                      <td>{borrowDate}</td>
                      <td>{returnDate}</td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="4">No orders found</td>
                  </tr>
                )
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
