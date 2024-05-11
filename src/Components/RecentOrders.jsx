import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Tooltip } from 'react-tooltip'


const RecentOrders = () => {
  const { recentOrders } = useAuthContext();
  const [slicedOrders, setSlicedOrders] = useState([]);


  useEffect(() => {
    const slicedArray = recentOrders.slice(0, 6);
    setSlicedOrders(slicedArray);
  }, [recentOrders]);

  return (
    <div className="order-form">
      <h3>Recent Orders</h3>
      <div className="main-table">
        <table className="table border text-center" data-tooltip-id="edit-bio" data-tooltip-content="Scroll in x-axis to view all">
          <thead>
            <tr>
              <th>Order</th>
              <th>Borrow Date</th>
              <th>Status</th>
              <th>Return Date</th>
            </tr>
          </thead>

          <tbody>
            {slicedOrders.map((item, i) => {
              const { itemId, borrowDate, returnDate } = item;
              return (
                <tr key={i}>
                  <td style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                    {itemId}
                  </td>
                  <td>{borrowDate}</td>
                  <td>Completed </td>
                  <td>{returnDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Tooltip id="edit-bio" />
    </div>
  );
};
export default RecentOrders;
