import React, { useState } from "react";
import User from "../components/User";
import Admin from "../components/Admin";

// AntD
import { Button, Flex, Typography } from "antd";
const { Title } = Typography;

const Home = () => {
  // Decide to render admin or user
  const [renderComponent, setRenderComponent] = useState("");

  // Define state
  const [employeesList, setEmployeesList] = useState([]);

  // Handle action
  const handleSubmit = (newEmployee) => {
    setEmployeesList([...employeesList, newEmployee]);
  };

  const handleDelete = (id) => {
    setEmployeesList(employeesList.filter((employee) => employee.id !== id));
  };

  return (
    <Flex vertical align="center" gap={16} style={{ marginTop: 32 }}>
      <Title style={{ fontWeight: "bold", textAlign: "center" }}>
        Generation Thailand <br />
        {!renderComponent && "React - Assessment"}
        {renderComponent === "User" ? "Home - User Sector" : ""}
        {renderComponent === "Admin" ? "Home - Admin Sector" : ""}
      </Title>

      <Flex align="space-between" gap={32}>
        <Button size="large" onClick={() => setRenderComponent("User")}>
          User Home Sector
        </Button>
        <Button size="large" onClick={() => setRenderComponent("Admin")}>
          Admin Home Sector
        </Button>
      </Flex>

      {renderComponent === "User" && <User emloyeesList={employeesList} />}
      {renderComponent === "Admin" && (
        <Admin
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          emloyeesList={employeesList}
        />
      )}
    </Flex>
  );
};

export default Home;
