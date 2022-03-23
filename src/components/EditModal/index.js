import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";
import React from "react";

function EditModal({ visible, onCreate, onCancel, fields }) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const validateMessages = {
    required: "${label} cần phải có!",
    types: {
      email: "${label} không hợp lệ!",
      number: "${label} không hợp lệ!",
    },
    number: {
      range: "${label} phải trong khoảng từ ${min} đến ${max}",
    },
  };

  return (
    <>
      <Modal
        title="Chỉnh sửa sinh viên"
        visible={visible}
        okText="Lưu lại"
        cancelText="Hủy"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => {
          form.resetFields();
          onCancel();
        }}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          validateMessages={validateMessages}
          fields={fields}
        >
          <Form.Item
            label="Họ tên"
            name="firstName"
            rules={[
              { required: true },
              { max: 20, message: "Nhập tối đa 20 kí tự!" },
              { min: 5, message: "Nhập tối thiểu 5 kí tự!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lớp"
            name="class"
            rules={[
              { required: true },
              { max: 20, message: "Nhập tối đa 20 kí tự!" },
              { min: 5, message: "Nhập tối thiểu 5 kí tự!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Khóa học"
            name="course"
            rules={[
              { required: true },
              { max: 20, message: "Nhập tối đa 20 kí tự!" },
              { min: 5, message: "Nhập tối thiểu 5 kí tự!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Trình độ"
            name="educationLevel"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="Cao đẳng">Cao đẳng</Option>
              <Option value="Đại học">Đại học</Option>
              <Option value="Thạc sĩ">Thạc sĩ</Option>
              <Option value="Tiến sĩ">Tiến sĩ</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Điểm trung bình"
            name="score"
            rules={[
              {
                required: true,
                type: "number",
                min: 0,
                max: 100,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditModal;
