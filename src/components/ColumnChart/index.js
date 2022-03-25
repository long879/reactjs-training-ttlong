import React from "react";

import { Column } from "@ant-design/plots";
import { Typography } from "antd";

function ColumnChart({ sortStudents, title }) {
  const { Title } = Typography;

  const data = [...sortStudents];
  const config = {
    data,
    xField: "type",
    yField: "number",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      number: {
        alias: "Số học sinh",
      },
    },
  };
  return (
    <>
      <Title level={2}>{title}</Title>
      <Column {...config} />
    </>
  );
}

export default ColumnChart;
