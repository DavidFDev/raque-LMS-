import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Tooltip } from "react-tooltip";

const RecentOrders = () => {
  const { recentOrders } = useAuthContext();
  const [slicedOrders, setSlicedOrders] = useState([]);
  const [borrowDateT, setBorrowDateT] = useState("");

  useEffect(() => {
    const slicedArray = () => recentOrders.slice(0, 6);
    setSlicedOrders(slicedArray);
  }, [recentOrders]);

  useEffect(() => {
    const padZero = (num) => {
      return num < 10 ? `0${num}` : num;
    };

    const handleCalculateDates = () => {
      let borrowDateTime = new Date(currentDate);

      // Borrow date time
      let borrowHours = borrowDateTime.getHours() % 12 || 12;
      const borrowMins = borrowDateTime.getMinutes();
      const borrowMeridiem = borrowDateTime.getHours() >= 12 ? "PM" : "AM";

      // Format borrow date
      const formattedBorrowDate = borrowDateTime.toLocaleDateString("en-NG", {
        weekday: "short", // Display abbreviated weekday (e.g., "Wed")
        day: "2-digit", // Display day of the month with leading zero (e.g., "05")
        year: "numeric", // Display full year (e.g., "2024")
      });

      setBorrowDateT(
        `${formattedBorrowDate}, ${padZero(borrowHours)}:${padZero(
          borrowMins
        )} ${borrowMeridiem}`
      );
    };
  }, []);




  return (
    <div className="order-form">
      <h3>Recent Orders</h3>
      <div className="main-table">
        <table
          className="table border text-center"
          data-tooltip-id="edit-bio"
          data-tooltip-content="Scroll in x-axis to view all"
        >
          <thead>
            <tr>
              <th>Order</th>
              <th>Borrow Date</th>
              {/* <th>Status</th> */}
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
                  {/* <td>{borrowDateT >= returnDate ? "Completed" : "Pending" } </td> */}
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
