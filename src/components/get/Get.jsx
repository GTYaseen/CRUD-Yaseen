import React, { useState } from "react";
import { Button, Modal, Image, Table, Space, Pagination } from "antd";
import "./Get.css";
import Delete from "../delete/Delete";
import Edit from "../edit/Edit";
import { EyeOutlined } from "@ant-design/icons";

function Get({ products, skip, setSkip }) {
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
          <Delete id={record.id} />
        </Space>
      ),
    },
  ];
  const columns2 = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
          <Delete id={record.id}  />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="table1">
        <Table
          columns={columns}
          dataSource={products}
          className="customTable"
          pagination={false}
        />
      </div>
      <div className="table2">
        <Table
          columns={columns2}
          dataSource={products}
          className="customTable"
          pagination={false}
          style={{ width: "200px" }}
        />
      </div>
      <br />
      <center>
        <Pagination
          defaultCurrent={1}
          total={100}
          showSizeChanger={false}
          onChange={(page) => setSkip((page - 1) * 10)}
        />
    </center>
    <br />
    </div>
  );
}

export default Get;
