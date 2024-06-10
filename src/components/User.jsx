import React from "react";

// AntD
import { Table } from "antd";
import Title from "antd/es/typography/Title";

// Table Data
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "33.33%",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    width: "33.33%",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    width: "33.33%",
  },
];

const User = ({ emloyeesList }) => {
  return (
    <section style={{ width: "60%" ,display: "flex", flexDirection: "column", gap: "16px" }}>
      <Title level={3}>Table 1</Title>
      <Table
        columns={columns}
        dataSource={emloyeesList}
        rowKey={(key) => key}
      />
    </section>
  );
};

export default User;
