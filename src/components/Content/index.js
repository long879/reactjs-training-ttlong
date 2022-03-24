import { Button, Col, Input, Layout, Modal, Row, Select, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../List";
import AddModal from "../AddModal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditModal from "../EditModal";
import {
  collegeStudentsGetData,
  collegestudentsPostData,
  collegestudentsPutData,
  collegestudentsDeleteData,
} from "../Datalayer/datalayerUtilities";

import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import {
  getStudents,
  addStudent,
  editStudent,
  deleteStudent,
  selectStudent,
} from "../../redux/Student/student.actions";
import DetailModal from "../DetailModal";

function ContentPage() {
  const { Content } = Layout;
  const { Search } = Input;
  const { Option } = Select;

  const students = useSelector((state) => state.studentReducer.students);
  const dispatch = useDispatch();

  const getListStudents = async () => {
    const response = await collegeStudentsGetData();
    dispatch(getStudents(response.data));
  };

  useEffect(() => {
    getListStudents();
  }, []);

  const handleSelect = async (value, record) => {
    const response = await collegestudentsPutData(record.id, {
      ...record,
      educationLevel: value,
    });
    dispatch(selectStudent(response.data));
  };

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "firstName",
      key: "firstName",

      render: (text, record) => (
        <a onClick={() => onDetailStudent(record)}>{text}</a>
      ),
    },
    {
      title: "Lớp",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Khóa học",
      dataIndex: "course",
      key: "course",
      responsive: ["md"],
    },
    {
      title: "Trình độ",
      dataIndex: "educationLevel",
      key: "educationLevel",
      responsive: ["md"],
      render: (text, record) => (
        <Select
          value={text}
          style={{ width: "100%" }}
          onSelect={(value) => handleSelect(value, record)}
        >
          <Option value="Cao đẳng">Cao đẳng</Option>
          <Option value="Đại học">Đại học</Option>
          <Option value="Thạc sĩ">Thạc sĩ</Option>
          <Option value="Tiến sĩ">Tiến sĩ</Option>
        </Select>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
      responsive: ["md"],
    },
    {
      title: "Điểm trung bình",
      dataIndex: "score",
      key: "score",
      responsive: ["md"],
    },
    {
      title: "Thao tác",
      key: "action",
      responsive: ["lg"],
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => onEditStudent(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => onDeleteStudent(record)}
          />
        </Space>
      ),
    },
  ];

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [fields, setFields] = useState([]);

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  const onCreateAddModal = async (values) => {
    let newStudent = {
      studentCode: 18512,
      firstName: values.firstName,
      lastName: "Jacobs",
      birthday: convert(values.birthday._d),
      class: values.class,
      course: values.course,
      educationLevel: values.educationLevel,
      typeOfEducation: "typeOfEducation",
      phone: "207.531.7620 x3018",
      address: "288 Gibson Roads",
      avatar: "https://cdn.fakercloud.com/avatars/ehsandiary_128.jpg",
      score: parseInt(values.score),
      email: values.email,
      key: uuidv4(),
    };

    const response = await collegestudentsPostData({
      ...newStudent,
    });

    dispatch(addStudent(response.data));
    setIsAddModalVisible(false);
  };

  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const onCancelAddModal = () => {
    setIsAddModalVisible(false);
  };

  const onEditStudent = (record) => {
    setIsEditModalVisible(true);
    setEditingStudent(record);
    setFields((prev) => [
      ...prev,
      {
        name: ["firstName"],
        value: record.firstName,
      },
      {
        name: ["class"],
        value: record.class,
      },
      {
        name: ["course"],
        value: record.course,
      },
      {
        name: ["educationLevel"],
        value: record.educationLevel,
      },
      {
        name: ["email"],
        value: record.email,
      },
      {
        name: ["birthday"],
        value: moment(record.birthday),
      },
      {
        name: ["score"],
        value: record.score,
      },
    ]);
  };

  const onCreateEditModal = async (values) => {
    const response = await collegestudentsPutData(editingStudent.id, {
      ...editingStudent,
      ...values,
      birthday: convert(values.birthday._d),
    });

    dispatch(editStudent(response.data));
    onCancelEditModal();
  };

  const onCancelEditModal = () => {
    setIsEditModalVisible(false);
    setEditingStudent(null);
    setFields([]);
  };

  const onDetailStudent = (record) => {
    setIsDetailModalVisible(true);
    setEditingStudent(record);
  };

  const onCreateDetailModal = () => {
    setIsDetailModalVisible(false);
    setEditingStudent(null);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa sinh viên này?",
      cancelText: "Hủy",
      okText: "Có",
      okType: "danger",
      onOk: async () => {
        const response = await collegestudentsDeleteData(record.id);
        dispatch(deleteStudent(response.data));
      },
    });
  };

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Input.Group size="large">
        <Row>
          <Col span={6}>
            <Button
              type="primary"
              size="large"
              style={{
                marginBottom: 16,
              }}
              onClick={showAddModal}
            >
              Thêm sinh viên
            </Button>
          </Col>
          <Col span={6} offset={2}>
            <Search placeholder="Tìm kiếm" allowClear size="large" />
          </Col>
        </Row>
      </Input.Group>
      <List columns={columns} data={students} />
      <AddModal
        visible={isAddModalVisible}
        onCreate={onCreateAddModal}
        onCancel={onCancelAddModal}
      />
      <EditModal
        visible={isEditModalVisible}
        fields={fields}
        onCreate={onCreateEditModal}
        onCancel={onCancelEditModal}
      />
      <DetailModal
        visible={isDetailModalVisible}
        editingStudent={editingStudent}
        onCreate={onCreateDetailModal}
      />
    </Content>
  );
}

export default ContentPage;
