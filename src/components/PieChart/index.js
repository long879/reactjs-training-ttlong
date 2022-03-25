import React from "react";

import { Pie } from "@ant-design/plots";
import { Typography } from "antd";

function PieChart({ sortStudents, title }) {
  const { Title } = Typography;

  const data = [...sortStudents];

  const config = {
    appendPadding: 10,
    data,
    angleField: "number",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <>
      <Title level={2}>{title}</Title>
      <Pie {...config} />
    </>
  );
}

export default PieChart;
