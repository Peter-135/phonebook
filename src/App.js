import "./App.css";
import { Table, Modal, Button, Form, Input } from "antd";
import "antd/dist/antd.css";

import React, { useState, useEffect } from "react";
// import { formatCountdown } from "antd/lib/statistic/utils";

const App = () => {
  // const editItem = () => {
  //   console.log("Hello World")
  // };

  // Maybe filter out elements that are NOT the index

  // const deleteItem = () => {
  //   let byeData = data;
  //   byeData.splice(0, 1);
  //   setData([...byeData]);
  // };

  // let elementToRemove = 2;

  const deleteItem = (data) => {
    let byeData = data; // this is right
    let indexToDelete = byeData.findIndex(
      //the way I'm using findIndex is wrong
      (element, index) => index === byeData[index]
    );

    byeData.splice(indexToDelete, 1); // this is right
    setData([...byeData]); // This is right
  };

  // How do I find index of row I am trying to delete?
  // console.log(index);

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
      key: "action",
      render: (a, data) => (
        <>
          <Button type="default" onClick={showModal}>
            Edit
          </Button>
          {/* <Button type="default">Save</Button> */}
          <Button type="default" onClick={deleteItem}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  let peter = {
    dave: 3456,
    bob: 4,
  };

  // console.log(peter.dave);

  // console.log(peter.bob);

  //findIndex, using

  // Array.push(objectName)
  //in my case, data.push(objectName)

  // get an object and push to the above array, use form to create an object (formObject as name?)

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

  const [data, setData] = useState([]);

  React.useEffect(() => {
    const ifDataExists = localStorage.getItem("data-input");
    if (ifDataExists) {
      setData(JSON.parse(ifDataExists));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("data-input", JSON.stringify(data));
  });

  // save on button click, when it deletes and add

  const [firstNameTerm, setFirstNameTerm] = useState("");
  const [lastNameTerm, setLastNameTerm] = useState("");
  const [workPhoneTerm, setWorkPhoneTerm] = useState("");
  const [homePhoneTerm, setHomePhoneTerm] = useState("");
  const [cellPhoneTerm, setCellPhoneTerm] = useState("");

  const [isEditing, setEditing] = useState(false);

  const editingInput = () => {
    setEditing(true);
  };

  const notEditingInput = () => {
    setEditing(false);
  };

  let newInfo = {
    firstName: firstNameTerm,
    lastName: lastNameTerm,
    workPhone: workPhoneTerm,
    homePhone: homePhoneTerm,
    cellPhone: cellPhoneTerm,
  };

  const pushArray = () => {
    let newData = data;

    newData.push(newInfo);
    setData([...newData]);
    setIsModalVisible(false);
  };
  // Array.splice([ITEM LOCATION], [Number of Item])

  // const editItem = () => {
  //   console.log("Hello World");
  // };

  // const deleteItem = () => {
  //   let byeData = data;
  //   byeData.splice(0, 1);
  //   setData([...byeData]);
  // };

  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />
      <Modal
        title="Add New Contact"
        visible={isModalVisible}
        onOk={pushArray}
        onCancel={handleCancel}
      >
        <Form /*form={form} */ name="userForm">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "'firstName' is required" }]}
          >
            <Input
              placeholder="First Name"
              value={firstNameTerm}
              onChange={(e) => setFirstNameTerm(e.target.value)}
              // onClick={editItem}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Last Name"
              value={lastNameTerm}
              onChange={(e) => setLastNameTerm(e.target.value)}
              // onClick={editItem}
            />
          </Form.Item>
          <Form.Item name="workPhone" label="Work Phone">
            <Input
              placeholder="Work Phone"
              value={workPhoneTerm}
              onChange={(e) => setWorkPhoneTerm(e.target.value)}
              // onClick={editItem}
            />
          </Form.Item>
          <Form.Item name="homePhone" label="Home Phone">
            <Input
              placeholder="Home Phone"
              value={homePhoneTerm}
              onChange={(e) => setHomePhoneTerm(e.target.value)}
              // onClick={editItem}
            />
          </Form.Item>
          <Form.Item name="cellPhone" label="Cell Phone">
            <Input
              placeholder="Cell Phone"
              value={cellPhoneTerm}
              onChange={(e) => setCellPhoneTerm(e.target.value)}
              // onClick={editItem}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Button type="primary" onClick={showModal}>
        Add New Contact
      </Button>
      {/* <Button type="default" onClick={editItem}>
        Edit
      </Button>
      <Button type="default" onClick={deleteItem}>
        Delete
      </Button> */}
    </div>
  );
};

export default App;
