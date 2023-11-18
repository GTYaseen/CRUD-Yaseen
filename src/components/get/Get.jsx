import React, { useState } from "react";
import { Card, Button, Modal, Image } from "antd";
import "./Get.css";

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

  return (
    <div className="gridStyle">
      <Card title="Get all products">
        {products.map((el) => (
          <Card.Grid key={el.id}>
            <div className="bar">
              <div>{el.title}</div>
              <div className="btn">
                <Button onClick={() => showModal(el.id)}>View</Button>
                <Button type="primary">Edit</Button>
                <Button type="dashed" danger>Delete</Button>
                <Modal
                  title="Product Details"
                  visible={selectedProductId === el.id}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <h1>{el.title}</h1>
                  <Image width={200} src={el.thumbnail} alt={el.title} />
                  <p>{el.description}</p>
                  <p>{el.price}$</p>
                </Modal>
              </div>
            </div>
          </Card.Grid>
        ))}
      </Card>
    </div>
  );
}

export default Get;
