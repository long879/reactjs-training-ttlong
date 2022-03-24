import {
  Typography,
  Badge,
  Descriptions,
  Image,
  Modal,
  Space,
} from "antd";

import React from "react";

function DetailModal({ visible, onCreate, editingStudent }) {
  const { Title } = Typography;
  return (
    <>
      <Modal
        visible={visible}
        okText="Đóng lại"
        onOk={() => {
          onCreate();
        }}
        width={650}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Descriptions
          title="Thông tin sinh viên"
          column={{ xxl: 4, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          bordered
        >
          <Descriptions.Item span={2}>
            <Space direction="horizontal">
              <Image width={200} src={editingStudent?.avatar} />

              <Space direction="vertical">
                <Title level={2}> {editingStudent?.firstName}</Title>
                <Title level={5}>MSSV: {editingStudent?.studentCode}</Title>
              </Space>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item label="Trạng thái:">
            <Badge status="processing" text="Còn học" />
          </Descriptions.Item>
          <Descriptions.Item label="Lớp:">
            {editingStudent?.class}
          </Descriptions.Item>
          <Descriptions.Item label="Ngày sinh:">
            {editingStudent?.birthday}
          </Descriptions.Item>
          <Descriptions.Item label="Khóa học:">
            {editingStudent?.course}
          </Descriptions.Item>
          <Descriptions.Item label="Trình độ:">
            {editingStudent?.educationLevel}
          </Descriptions.Item>
          <Descriptions.Item label="Điện thoại:">
            {editingStudent?.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Email:">
            {editingStudent?.email}
          </Descriptions.Item>
          <Descriptions.Item label="Địa chỉ thường trú:" span={2}>
            {editingStudent?.address}
          </Descriptions.Item>
          <Descriptions.Item label="Điểm trung bình:">
            {editingStudent?.score}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}

export default DetailModal;
