import { Input, Modal } from "antd";
import React from "react";

function EditModal({
  visible,
  handleOk,
  handleCancel,
  editingStudent,
  setEditingStudent,
}) {
  return (
    <>
      <Modal
        title="Chỉnh sửa sinh viên"
        visible={visible}
        onOk={() => handleOk()}
        onCancel={handleCancel}
      >
        <Input
          value={editingStudent?.firstName}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.class}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, class: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.course}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, course: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.educationLevel}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, educationLevel: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.typeOfEducation}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, typeOfEducation: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
}

export default EditModal;
