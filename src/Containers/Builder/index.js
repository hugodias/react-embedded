import React, { Component } from "react";

import "./Builder.css";
import { Layout, Menu, Icon, Row, Col } from "antd";
import { Input, Select, Rate, Form, Button, Spin, Avatar } from "antd";
import Profile from "../../Components/Profile";
import AvatarChooser from "../../Components/AvatarChooser";
import fire from "../../fire";

const FormItem = Form.Item;
const { Header, Footer, Sider, Content } = Layout;

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      key: null,
      form: {
        id: null,
        name: "hugo",
        website: "github.io/hugodias",
        rate: 3
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleCreateEmbeddedCode = this.handleCreateEmbeddedCode.bind(this);
  }

  handleFieldChange = field => event => {
    const form = { ...this.state.form };
    const value = event.target ? event.target.value : event;
    form[field] = value;
    this.setState({ form, loading: false, key: null });
  };

  handleCreateEmbeddedCode = e => {
    const { form, key } = this.state;
    this.setState({ loading: true });
    const ref = fire
      .database()
      .ref("embedded")
      .push(form);
    this.setState({ loading: false, modalVisible: true, key: ref.key });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    const { loading } = this.state;
    const { form } = this.state;

    return (
      <Row>
        <Col span={6} offset={5}>
          <Profile {...form} />
        </Col>
        <Col offset={1} span={8}>
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
              <Button
                type="primary"
                disabled={this.state.key}
                onClick={this.handleCreateEmbeddedCode}
              >
                Save profile<Icon type="right" />
              </Button>
            </Button.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Builder;
