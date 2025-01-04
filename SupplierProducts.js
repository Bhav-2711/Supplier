import React, { useState } from 'react';

const SupplierProducts = ({ products, onAdd, onEdit, onDelete }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleAddProduct = () => {
    onAdd(newProduct);
    setNewProduct({ name: '', price: '' });
  };

  return (
    <div className="supplier-products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default SupplierProducts;
