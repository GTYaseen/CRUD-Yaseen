import React, { useState } from "react";
import { Button, Modal, Input} from "antd";
const { TextArea } = Input;
import { DollarOutlined } from "@ant-design/icons";

function Edit({ id, onEdit,products }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const showEditing = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
    // Trigger the callback to refresh the product list
    onEdit();
    alert("Product edited successfully");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateProduct = () => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT", // or PATCH
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        handleOK();
      })
      .catch((error) => {
        console.error("Error editing product:", error);
        setIsLoading(false);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div>
      <Button type="primary" onClick={showEditing}>
        Edit
      </Button>
      <Modal
        title="Edit Product"
        visible={isModalOpen}
        onOk={updateProduct}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <p>
          Product Name
          <Input
            placeholder="Ex: iPhone X"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          Description
          <TextArea
            rows={3}
            placeholder="Ex: An Apple mobile phone with..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          Price
          <Input
            addonAfter={<DollarOutlined />}
            placeholder={products.price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
      </Modal>
    </div>
  );
}

export default Edit;
