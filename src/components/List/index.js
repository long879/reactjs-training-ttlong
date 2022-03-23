import { Table } from "antd";
import React from "react";

function List({ columns, data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default List;
