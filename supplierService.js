export const addProduct = async (supplierId, product) => {
  await fetch(`${API_URL}/${supplierId}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
};

export const deleteProduct = async (supplierId, productId) => {
  await fetch(`${API_URL}/${supplierId}/products/${productId}`, {
    method: 'DELETE',
  });
};

export const addOrder = async (supplierId, order) => {
  await fetch(`${API_URL}/${supplierId}/orderHistory`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
};

export const deleteOrder = async (supplierId, orderId) => {
  await fetch(`${API_URL}/${supplierId}/orderHistory/${orderId}`, {
    method: 'DELETE',
  });
};
