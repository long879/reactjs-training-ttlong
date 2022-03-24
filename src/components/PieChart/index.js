import React from "react";

import { Pie } from "@ant-design/plots";

function PieChart() {
  const data = [
    {
      type: "Kém",
      value: 27,
    },
    {
      type: "Yếu",
      value: 25,
    },
    {
      type: "Trung bình",
      value: 18,
    },
    {
      type: "Khá",
      value: 15,
    },
    {
      type: "Giỏi",
      value: 10,
    },
    {
      type: "Xuất sắc",
      value: 5,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
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
  return <Pie {...config} />;
}

export default PieChart;
