import React, { useState } from "react";
import { Button, Modal,Input  } from "antd";

function NewProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showAdding = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addNewProduct = () => {
    setIsLoading(true);

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      // Handle success, e.g., show a success message or update the product list
      handleOK();
    })
    .catch((error) => {
      console.error("Error adding new product:", error);
      setIsLoading(false);
      // Handle error, e.g., show an error message to the user
    });
  };

  return (
    <div>
      <Button type="primary" onClick={showAdding}>
        Add new product
      </Button>
      <Modal
        title="Add new product"
        visible={isModalOpen}
        onOk={addNewProduct}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <Input placeholder="Basic usage" />
      </Modal>
    </div>
  );
}

export default NewProduct;
