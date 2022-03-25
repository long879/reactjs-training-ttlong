import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Col, Layout, Row } from "antd";
import PieChart from "../../components/PieChart";
import ColumnChart from "../../components/ColumnChart";

function Statistics() {
  const { Content } = Layout;

  const students = useSelector((state) => state.studentReducer.students);
  const [sortStudentsScore, setSortStudentsScore] = useState([]);
  const [sortStudentsEducationLevel, setSortStudentsEducationLevel] = useState(
    []
  );

  useEffect(() => {
    const countsScore = [
      {
        type: "Kém",
        number: 0,
      },
      {
        type: "Yếu",
        number: 0,
      },
      {
        type: "Trung bình",
        number: 0,
      },
      {
        type: "Khá",
        number: 0,
      },
      {
        type: "Giỏi",
        number: 0,
      },
      {
        type: "Xuất sắc",
        number: 0,
      },
    ];

    const countsEducationLevel = [
      {
        type: "Cao đẳng",
        number: 0,
      },
      {
        type: "Đại học",
        number: 0,
      },
      {
        type: "Thạc sĩ",
        number: 0,
      },
      {
        type: "Tiến sĩ",
        number: 0,
      },
    ];

    students.forEach((student) => {
      if (student.score <= 10) {
        countsScore[0].number += 1;
      } else if (student.score <= 30) {
        countsScore[1].number += 1;
      } else if (student.score <= 50) {
        countsScore[2].number += 1;
      } else if (student.score <= 75) {
        countsScore[3].number += 1;
      } else if (student.score <= 90) {
        countsScore[4].number += 1;
      } else {
        countsScore[5].number += 1;
      }

      if (student.educationLevel === "Cao đẳng") {
        countsEducationLevel[0].number += 1;
      } else if (student.educationLevel === "Đại học") {
        countsEducationLevel[1].number += 1;
      } else if (student.educationLevel === "Thạc sĩ") {
        countsEducationLevel[2].number += 1;
      } else {
        countsEducationLevel[3].number += 1;
      }
    });

    setSortStudentsScore(countsScore);
    setSortStudentsEducationLevel(countsEducationLevel);
  }, [students]);

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Row>
        <Col span={24}>
          <ColumnChart
            sortStudents={sortStudentsScore}
            title="Thống kê theo học lực:"
          />
        </Col>
        <Col span={12}>
          <PieChart
            sortStudents={sortStudentsScore}
            title="Thống kê theo học lực:"
          />
        </Col>
        <Col span={12}>
          <PieChart
            sortStudents={sortStudentsEducationLevel}
            title="Thống kê theo trình độ:"
          />
        </Col>
      </Row>
    </Content>
  );
}

export default Statistics;
