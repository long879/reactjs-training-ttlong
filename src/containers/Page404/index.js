import React from "react";

import { Result, Button, Layout } from "antd";
import { Link } from "react-router-dom";

function Page404() {
  const { Content } = Layout;
  return (
    <Content>
      <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Về trang chủ</Link>
        </Button>
      }
    />
    </Content>
  );
}

export default Page404;
