import { AreaChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

function Sidebar() {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider
      width={200}
      className="site-layout-background"
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
          <Menu.Item key="1">Danh sách sinh viên</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<AreaChartOutlined />}
          title="Thống kê kết quả"
        >
          <Menu.Item key="5">Theo niên khóa</Menu.Item>
          <Menu.Item key="6">Theo ngành</Menu.Item>
          <Menu.Item key="7">Theo lớp</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
