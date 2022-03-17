import { Form, Input, Modal } from "antd";
import React, { useState } from "react";

function AddModal({ visible, handleOk, handleCancel }) {
  const [firstName, setFirstName] = useState("");
  const [classEducation, setClassEducation] = useState("");
  const [course, setCourse] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [typeOfEducation, setTypeOfEducation] = useState("");

  return (
    <>
      <Modal
        title="Thêm sinh viên mới"
        visible={visible}
        onOk={() =>
          handleOk(
            firstName,
            classEducation,
            course,
            educationLevel,
            typeOfEducation
          )
        }
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Form.Item
            label="Họ tên"
            name="username"
            rules={[{ required: true, message: "Mời nhập họ tên!" }]}
          >
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Lớp"
            name="class"
            rules={[{ required: true, message: "Mời nhập lớp!" }]}
          >
            <Input
              value={classEducation}
              onChange={(e) => setClassEducation(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Khóa học"
            name="course"
            rules={[{ required: true, message: "Mời nhập khóa học!" }]}
          >
            <Input value={course} onChange={(e) => setCourse(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Trình độ"
            name="educationLevel"
            rules={[{ required: true, message: "Mời nhập trình độ!" }]}
          >
            <Input
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Hình thức đào tạo"
            name="typeOfEducation"
            rules={[{ required: true, message: "Mời nhập hình thức đào tạo!" }]}
          >
            <Input
              value={typeOfEducation}
              onChange={(e) => setTypeOfEducation(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddModal;
