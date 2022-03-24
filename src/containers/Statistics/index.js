import React from "react";

import { Col, Layout, Row } from "antd";
import PieChart from "../../components/PieChart";
import ColumnChart from "../../components/ColumnChart";

function Statistics() {
  const { Content } = Layout;

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
          <ColumnChart />
        </Col>
        <Col span={12}>
          <PieChart />
        </Col>
        <Col span={12}>
          <PieChart />
        </Col>
      </Row>
    </Content>
  );
}

export default Statistics;
