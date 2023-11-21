import React from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function Delete({ id, onDelete }) {
  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      console.log(`Product with ID ${id} deleted successfully`);
      onDelete(); 
    })
    .catch((error) => {
      console.error(`Error deleting product with ID ${id}:`, error);
    });
  };

  return (
    <div>
      <Button type="dashed" danger onClick={handleDelete} style={{backgroundColor:"#FF0000", color:"white"}}><DeleteOutlined /></Button>
    </div>
  );
}

export default Delete;