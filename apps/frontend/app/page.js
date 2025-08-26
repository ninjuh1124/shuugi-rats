import { Button, Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Title } from "../components/proxyComponents/Typography";

const RootPage = () => {
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Content style={{ minHeight: "100%"}}>
        <Row justify="center">
          <Col>
            <Title  level={1}>Shuugi Rats</Title>
          </Col>
        </Row>

        <Row justify="center">
          <Col>
            <Button type="primary">Create New Session</Button>
          </Col>
        </Row>

        <Row justify="center">
          <Col>
            <Button type="primary">Find Session</Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default RootPage;