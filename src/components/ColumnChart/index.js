import React from "react";

import { Column } from "@ant-design/plots";

function ColumnChart() {
  const data = [
    {
      type: "Kém",
      sales: 38,
    },
    {
      type: "Yếu",
      sales: 52,
    },
    {
      type: "Trung bình",
      sales: 61,
    },
    {
      type: "Khá",
      sales: 145,
    },
    {
      type: "Giỏi",
      sales: 48,
    },
    {
      type: "Xuất sắc",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
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
      sales: {
        alias: "Số học sinh",
      },
    },
  };
  return <Column {...config} />;
}

export default ColumnChart;
