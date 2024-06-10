import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

// AntD
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content
        style={{
          padding: "0 48px",
          flex: 1,
          background: "#fff",
        }}
      >
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;