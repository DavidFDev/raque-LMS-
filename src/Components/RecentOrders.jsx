const RecentOrders = () => {
  return (
    <div className="order-form">
      <h3>Recent Orders</h3>
      <div className="main-table">
        <table className="table border text-center">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#074145O5</td>
              <td>October 18, 2023</td>
              <td>Completed </td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>

            <tr>
              <td>#074145O6</td>
              <td>October 18, 2023</td>
              <td>On Hold </td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>

            <tr>
              <td>#074145O7</td>
              <td>October 18, 2023</td>
              <td>Completed </td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>

            <tr>
              <td>#074145O5</td>
              <td>October 18, 2023</td>
              <td>Completed </td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>

            <tr>
              <td>#074145O6</td>
              <td>October 18, 2023</td>
              <td>On Hold</td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>

            <tr>
              <td>#074145O7</td>
              <td>October 18, 2023</td>
              <td>Completed </td>
              <td>
                <span>&#8358;</span>49.00 for 1 item
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RecentOrders;
