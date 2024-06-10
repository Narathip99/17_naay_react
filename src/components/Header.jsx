import React from "react";
import { Link, useLocation } from "react-router-dom";

// AntD
import { Layout, Menu, Typography } from "antd";
const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const location = useLocation();

  return (
    <AntHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Title level={2} style={{ width: "100%", color: "white", margin: 0 }}>
        JSD7
      </Title>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/owner">
          <Link to="/owner">Owner</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
