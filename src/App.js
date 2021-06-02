import "./App.css";
import { Table, Modal, Button, Form, Input } from "antd";
import "antd/dist/antd.css";

import React, { useState, useEffect } from "react";
// import { formatCountdown } from "antd/lib/statistic/utils";

// let elementToRemove = 2;

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
  const [data, setData] = useState([]);

  const deleteItem = (funcData) => {
    //[...data]

    let allData = [...data]; // r

    console.log({ allData: allData });
    console.log(funcData);
    // console.log(item);
    // console.log("HELLO WORLD");

    const indexTesting = (element, index) =>
      JSON.stringify(element) === JSON.stringify(funcData);

    // // console.log(item);
    let indexToDelete = allData.findIndex(indexTesting);

    if (indexToDelete !== -1) {
      allData.splice(indexToDelete, 1); // r
    }
    setData([...allData]); // r
  };
  // console.log(data);

  //  How do I find index of row I am trying to delete?

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
          {/* <Button type="default" onClick={saveItem}>
            Save
          </Button> */}
          <Button type="default" onClick={showModal}>
            Edit
          </Button>
          {/* <Button type="default">Save</Button> */}
          <Button type="default" onClick={() => deleteItem(data)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  // try console.log(a) and data,
  // let peter = {
  //   dave: 3456,
  //   bob: 4,
  // };

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

  // const [data, setData] = useState([]);

  // console.log(data);

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

  // const [isEditing, setEditing] = useState(false);

  // const editingInput = () => {
  //   setEditing(true);
  // };

  // const notEditingInput = () => {
  //   setEditing(false);
  // };

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

  const saveItem = () => {
    console.log("Hello World");
  };

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

// Things I've tried

//   // let indexToDelete = byeData.findIndex(testForIndex);
// let indexToDelete = byeData.findIndex((element, index) => element === item);
// let indexToDelete = byeData.findIndex(indexTesting);

// let indexToDelete = byeData.findIndex(
// w
//   (element, index) => index === byeData[index]
// );
//   // let indexToDelete = byeData.findIndex(testForIndex);
// let indexToDelete = byeData.findIndex((element, index) => element === item);
// let indexToDelete = byeData.findIndex(indexTesting);
