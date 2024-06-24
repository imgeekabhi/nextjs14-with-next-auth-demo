"use client";
// Import necessary dependencies
import React from "react";
import { Layout, Menu, Button } from "antd";
import { useRouter } from "next/navigation";

import { LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
            MyApp
          </div>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
        <Button
          style={{ marginTop: 16 }}
          type="primary"
          icon={<LogoutOutlined />}
          onClick={() => router.push("/api/auth/signout")}
        >
          Logout
        </Button>
      </Header>
    </Layout>
  );
};

export default Navbar;
