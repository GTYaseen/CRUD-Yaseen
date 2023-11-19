import React from 'react';
import { Button } from 'antd';

function Delete({ id, onDelete }) {
  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      console.log(`Product with ID ${id} deleted successfully`);
      onDelete(); // Trigger the callback to refresh the product list
    })
    .catch((error) => {
      console.error(`Error deleting product with ID ${id}:`, error);
    });
  };

  return (
    <div>
      <Button type="dashed" danger onClick={handleDelete}>Delete</Button>
    </div>
  );
}

export default Delete;