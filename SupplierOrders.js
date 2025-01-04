import React from 'react';

const SupplierOrders = ({ orders, onAdd, onDelete }) => {
  const [newOrder, setNewOrder] = useState({ date: '', total: '' });

  const handleAddOrder = () => {
    onAdd(newOrder);
    setNewOrder({ date: '', total: '' });
  };

  return (
    <div className="supplier-orders">
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.date} - ${order.total}
            <button onClick={() => onDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="date"
          value={newOrder.date}
          onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Total"
          value={newOrder.total}
          onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })}
        />
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
    </div>
  );
};

export default SupplierOrders;
