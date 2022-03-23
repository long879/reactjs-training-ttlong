import { AreaChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider
      width={200}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý sinh viên">
          <Menu.Item key="1">
            <Link to="/">Danh sách sinh viên</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<AreaChartOutlined />}
          title="Thống kê kết quả"
        >
          <Menu.Item key="5">
            <Link to="/chart">Bảng thống kê kết quả</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
