import "./App.css";
import { Table, Modal, Button } from "antd";
import "antd/dist/antd.css";
import MainButton from "./components/MainButton";
import React, { useState } from "react";

const App = () => {
  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "WorkPhone",
      dataIndex: "workPhone",
      key: "workPhone",
    },
    {
      title: "HomePhone",
      dataIndex: "homePhone",
      key: "homePhone",
    },
    {
      title: "CellPhone",
      dataIndex: "cellPhone",
      key: "cellPhone",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];

  const data = [
    {
      firstName: "Peter",
      lastName: "Parker",
      workPhone: 1234567890,
      homePhone: 9876543210,
      cellPhone: 2345678901,
    },
    {
      firstName: "Clarke",
      lastName: "Kent",
      workPhone: 1234561234,
      homePhone: 9876545678,
      cellPhone: 2345677654,
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />
      {/* <MainButton /> */}
      <Modal
        title="Add New Contact"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents..</p>
      </Modal>
      <Button type="primary" onClick={showModal}>
        Add New Contact
      </Button>
    </div>
  );
};

export default App;
