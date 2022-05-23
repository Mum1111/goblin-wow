import * as React from "react";
import { Form, Input, Button, } from "antd-mobile";

function Home() {
  return (
    <>
      <div>炼金价格计算</div>
      <Form layout="horizontal" footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }>
        <Form.Item label="孀花" name="widow">
          <Input placeholder="请输入孀花价格" clearable type="number" />
        </Form.Item>
        <Form.Item label="绽亡花" name="dead">
          <Input placeholder="请输入绽亡花价格" clearable type="number" />
        </Form.Item>
        <Form.Item label="慰魂之光" name="light">
          <Input placeholder="请输入慰魂之光价格" clearable type="number" />
        </Form.Item>
        <Form.Item label="髓根草" name="pith">
          <Input placeholder="请输入髓根草价格" clearable type="number" />
        </Form.Item>
        <Form.Item label="晋荣花" name="jin">
          <Input placeholder="请输入晋荣花价格" clearable type="number" />
        </Form.Item>
      </Form>
    </>
  );
}

export default Home;
