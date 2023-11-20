import React, { useState } from "react";
import { Button, Modal, Image, Table, Space } from "antd";
import "./Get.css";
import Delete from "../delete/Delete";
import Edit from "../edit/Edit";
import { EyeOutlined } from "@ant-design/icons";

function Get({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const showModal = (id) => {
    setSelectedProductId(id);
  };

  const handleOk = () => {
    setSelectedProductId(null);
  };
  const handleCancel = () => {
    setSelectedProductId(null);
  };
  const handleDeleteSuccess = () => {
    alert("Product deleted successfully");
  };
  const handleEditSuccess = () => {
    alert("Product edited successfully");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => showModal(record.id)}
            style={{ backgroundColor: "white", color: "black" }}
          >
            <EyeOutlined />
          </Button>
          <Modal
            title="Product Details"
            open={selectedProductId === record.id}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h1>{record.title}</h1>
            <Image width={200} src={record.thumbnail} alt={record.title} />
            <p>{record.description}</p>
            <p>{record.price}$</p>
          </Modal>
          <Edit id={record.id} onEdit={handleEditSuccess} products={products} />
          <Delete id={record.id} onDelete={handleDeleteSuccess} />
        </Space>
      ),
    },
  ];
  return (
    <div className="tableStyle">
      <Table columns={columns} dataSource={products} className="customTable" />
    </div>
  );
}

export default Get;
