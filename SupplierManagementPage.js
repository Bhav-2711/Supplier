import React, { useState, useEffect } from 'react';
import SupplierForm from '../components/SupplierForm';
import SupplierTable from '../components/SupplierTable';
import { getSuppliers, addSupplier, updateSupplier, deleteSupplier } from '../services/supplierService';

const SupplierManagementPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [editingSupplier, setEditingSupplier] = useState(null);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    const data = await getSuppliers();
    setSuppliers(data);
  };

  const handleAddOrUpdateSupplier = async (supplier) => {
    if (supplier.id) {
      await updateSupplier(supplier);
    } else {
      await addSupplier(supplier);
    }
    fetchSuppliers();
    setEditingSupplier(null);
  };

  const handleDeleteSupplier = async (id) => {
    await deleteSupplier(id);
    fetchSuppliers();
  };

  return (
    <div className="supplier-management">
      <h1>Supplier Management</h1>
      <SupplierForm
        supplier={editingSupplier}
        onSave={handleAddOrUpdateSupplier}
        onCancel={() => setEditingSupplier(null)}
      />
      <SupplierTable
        suppliers={suppliers}
        onEdit={(supplier) => setEditingSupplier(supplier)}
        onDelete={handleDeleteSupplier}
      />
    </div>
  );
};

export default SupplierManagementPage;
