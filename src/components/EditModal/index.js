import { Input, Modal } from "antd";
import React from "react";

function EditModal({
  visible,
  handleOk,
  handleCancel,
  editingStudent,
  setEditingStudent,
}) {
  // const [form] = Form.useForm();
  // useEffect(() => {
  //   form.setFieldsValue({
  //     firstName: editingStudent.firstName,
  //   });
  // }, [form, editingStudent]);
  return (
    <>
      <Modal
        title="Chỉnh sửa sinh viên"
        visible={visible}
        okText="Lưu lại"
        cancelText="Hủy"
        onOk={() => handleOk()}
        onCancel={handleCancel}
      >
        {/* <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Họ tên"
            name="firstName"
            rules={[{ required: true, message: "Mời nhập họ tên!" }]}
          > */}
        <Input
          value={editingStudent?.firstName}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
        />
        {/* </Form.Item> */}
        {/* <Form.Item
            label="Lớp"
            name="class"
            rules={[{ required: true, message: "Mời nhập lớp!" }]}
          > */}
        <Input
          value={editingStudent?.class}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, class: e.target.value };
            });
          }}
        />
        {/* </Form.Item> */}
        {/* <Form.Item
            label="Khóa học"
            name="course"
            rules={[{ required: true, message: "Mời nhập khóa học!" }]}
          > */}
        <Input
          value={editingStudent?.course}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, course: e.target.value };
            });
          }}
        />
        {/* </Form.Item> */}
        {/* <Form.Item
            label="Trình độ"
            name="educationLevel"
            rules={[{ required: true, message: "Mời nhập trình độ!" }]}
          > */}
        <Input
          value={editingStudent?.educationLevel}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, educationLevel: e.target.value };
            });
          }}
        />
        {/* <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Mời nhập email!" }]}
          > */}
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        {/* </Form.Item> */}
        {/* <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[{ required: true, message: "Mời nhập ngày sinh!" }]}
          > */}
        <Input
          value={editingStudent?.birthday}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, birthday: e.target.value };
            });
          }}
        />
        {/* s */}
        {/* <Form.Item
            label="Điểm trung bình"
            name="score"
            rules={[{ required: true, message: "Mời nhập điểm trung bình!" }]}
          > */}
        <Input
          value={editingStudent?.score}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, score: e.target.value };
            });
          }}
        />
        {/* </Form.Item> */}
        {/* </Form> */}
      </Modal>
    </>
  );
}

export default EditModal;
