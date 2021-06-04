import "./App.css";
import { Table, Modal, Button, Form, Input, Skeleton } from "antd";
import "antd/dist/antd.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("Add");

  const deleteItem = (funcData) => {
    let allData = [...data];

    // console.log(allData);
    // console.log({ allData: allData });
    // console.log(funcData);
    // console.log(item);

    const indexTesting = (element, index) =>
      JSON.stringify(element) === JSON.stringify(funcData);

    let indexToDelete = allData.findIndex(indexTesting);
    // console.log(indexToDelete);

    if (indexToDelete !== -1) {
      allData.splice(indexToDelete, 1);
    }
    setData([...allData]);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setType("Add");
  };

  const saveEditedData = () => {
    setIsModalVisible(false);
    setType("Add");
  };

  const [firstNameTerm, setFirstNameTerm] = useState("");
  const [lastNameTerm, setLastNameTerm] = useState("");
  const [workPhoneTerm, setWorkPhoneTerm] = useState("");
  const [homePhoneTerm, setHomePhoneTerm] = useState("");
  const [cellPhoneTerm, setCellPhoneTerm] = useState("");

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

  const editItem = (dataToEdit) => {
    let allData = [...data];
    // let isTrueModalVisible = [...isModalVisible]
    // const [type, setType] = useState("Add New Contact");
    setType("Edit New Contact");

    const indexTesting = (element, index) =>
      JSON.stringify(element) === JSON.stringify(dataToEdit);

    // console.log(indexTesting);

    let indexToEdit = allData.findIndex(indexTesting);
    console.log(allData);
    console.log(dataToEdit);
    console.log(indexToEdit);

    // <Modal data={dataToEdit}></Modal>;

    <Modal rowData={dataToEdit} indexData={indexToEdit}></Modal>;

    showModal();

    setData([...data]);
  };

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
          {/* {console.log(a)} */}
          {/* {console.log(data)} */}
          <Button type="default" onClick={() => editItem(data)}>
            Edit
          </Button>

          <Button type="default" onClick={() => deleteItem(data)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  React.useEffect(() => {
    const ifDataExists = localStorage.getItem("data-input");
    if (ifDataExists) {
      setData(JSON.parse(ifDataExists));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("data-input", JSON.stringify(data));
  });

  return (
    <div className="App">
      <Table dataSource={data} columns={columns} />
      <Modal
        title={type == "Add" ? "Add New Contact" : "Edit New Contact"}
        visible={isModalVisible}
        onOk={type == "Add" ? pushArray : saveEditedData}
        onCancel={handleCancel}
        modalRow={data}
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
    </div>
  );
};

export default App;
