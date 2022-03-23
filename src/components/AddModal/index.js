import { Form, Input, Modal } from "antd";
import React, { useState } from "react";

function AddModal({ visible, handleOk, handleCancel }) {

  const [firstName, setFirstName] = useState("");
  const [classEducation, setClassEducation] = useState("");
  const [course, setCourse] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <Modal
        title="Thêm sinh viên mới"
        visible={visible}
        okText="Thêm mới"
        cancelText="Hủy"
        onOk={() =>
          handleOk(
            firstName,
            classEducation,
            course,
            educationLevel,
            email,
            birthday,
            score
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
            label="Email"
            name="email"
            rules={[{ required: true, message: "Mời nhập email!" }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="birthday"
            rules={[{ required: true, message: "Mời nhập ngày sinh!" }]}
          >
            <Input
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Điểm trung bình"
            name="score"
            rules={[{ required: true, message: "Mời nhập điểm!" }]}
          >
            <Input value={score} onChange={(e) => setScore(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddModal;
