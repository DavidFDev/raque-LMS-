import { useAuthContext } from "../Context/AuthContext";


const AllOrders = () => {
  const { orders } = useAuthContext();

  return (
    <>
      <table
        className="table border text-center"
      >
        <thead>
          <tr>
            <th>Order</th>
            <th>Borrow Date</th>
            <th>Status</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.length > 0 ? (
            orders.map((item, i) => {
              const { itemId, borrowDate, returnDate } = item;
              return (
                <tr key={i}>
                  <td>{itemId}</td>
                  <td>{borrowDate}</td>
                  <td>Completed</td>
                  <td>{returnDate}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>

    </>
  );
};

export default AllOrders;
