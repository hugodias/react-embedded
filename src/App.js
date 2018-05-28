import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Icon, Avatar, Row, Col } from "antd";
import { Input, Select, Rate, Form, Button } from "antd";
const FormItem = Form.Item;

const { Meta } = Card;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      form: {
        name: "hugo",
        website: "github.io/hugodias",
        rate: 3
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange = field => event => {
    const form = { ...this.state.form };
    const value = event.target ? event.target.value : event;
    form[field] = value;
    this.setState({ form, loading: false });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    const { loading } = this.state;
    const { form } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Embedded profile builder</h1>
        </header>
        <Row>
          <Col span={6} offset={6}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={form.name}
                description={form.website}
              />
              <Rate
                allowHalf
                disabled
                value={form.rate}
                style={{ marginTop: 20 }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="Full name">
                <Input
                  placeholder="Basic usage"
                  value={form.name}
                  onChange={this.handleFieldChange("name")}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Website">
                <Input
                  addonBefore="https://"
                  defaultValue="mysite"
                  value={form.website}
                  onChange={this.handleFieldChange("website")}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="Rate">
                <Rate
                  allowHalf
                  value={form.rate}
                  onChange={this.handleFieldChange("rate")}
                />
              </FormItem>

              <Button.Group size="large">
                <Button type="primary">
                  Next<Icon type="right" />
                </Button>
              </Button.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
