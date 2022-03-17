import { Avatar, Badge, Col, Layout, Row, Space } from "antd";
import logo from "../../assets/images/ivory-studio.png";
import React from "react";
import { BellOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

function Header() {
  const { Header } = Layout;
  return (
    <Header className="header">
      <Row justify="space-between">
        <Col className="gutter-row" span={4}>
          <div style={{ position: "relative", width: "60%", height: "100%" }}>
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <Space size="middle">
            <Badge count={5}>
              <Avatar
                shape="square"
                size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                icon={<MessageOutlined />}
              />
            </Badge>
            <Badge count={0} showZero>
              <Avatar
                shape="square"
                size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                icon={<BellOutlined />}
              />
            </Badge>
            <Avatar
              shape="square"
              size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              icon={<UserOutlined />}
            />
          </Space>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;
