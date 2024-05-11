import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Tooltip } from "react-tooltip";

const AllOrders = () => {
  const { orders } = useAuthContext();

  return (
    <>
      <table
        className="table border text-center"
        data-tooltip-id="edit-bio"
        data-tooltip-content="Scroll in x-axis to view all"
      >
        <thead className="">
          <tr>
            <th>Order</th>
            <th>Borrow Date</th>
            <th>Status</th>
            <th>Return Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item, i) => {
            const { itemId, borrowDate, returnDate } = item;
            return (
              <tr key={i}>
                <td>{itemId}</td>
                <td>{borrowDate}</td>
                <td>Completed </td>
                <td>{returnDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Tooltip id="edit-bio" />
    </>
  );
};

export default AllOrders;
