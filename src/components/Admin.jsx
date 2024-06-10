import React from "react";

// AntD
import { Button, Flex, Form, Input, Table } from "antd";
import Title from "antd/es/typography/Title";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Admin = ({
  handleSubmit,
  handleDelete,
  emloyeesList,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    handleSubmit({ ...values, id: emloyeesList.length + 1 });
    form.resetFields();
  };

  // Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "29%",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      width: "29%",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      width: "29%",
    },
    {
      title: "Actions",
      key: "actions",
      width: "13%",
      align: "center",
      render: (item, record) => (
        <Flex style={{ justifyContent: "space-between" }}>
          <Button 
            type="primary" 
            style={{ backgroundColor: "orange" }}
          >
            <EditOutlined />
          </Button>
          <Button 
            type="primary" 
            danger 
            onClick={() => handleDelete(record.id)}
          >
            <DeleteOutlined />
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <section
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Title level={3}>Create User Here</Title>

      <Form
        form={form}
        onFinish={onFinish}
        style={{ display: "flex", flexDirection: "row", gap: "16px" }}
      >
        <Form.Item
          style={{ width: "100%" }}
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" size="large" />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last Name" size="large" />
        </Form.Item>
        <Form.Item
          style={{ width: "100%" }}
          name="position"
          rules={[{ required: true, message: "Please input your position!" }]}
        >
          <Input placeholder="Position" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={emloyeesList}
        rowKey={(key) => key}
        pagination={{ pageSize: 4 }}
      />
    </section>
  );
};

export default Admin;
