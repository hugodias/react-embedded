import React, { Component } from "react";

import "./Builder.css";
import { Icon, Row, Col } from "antd";
import { Input, Select, Rate, Form, Button } from "antd";
import Profile from "../../Components/Profile";
import Header from "../../Components/Header";
const FormItem = Form.Item;

class Builder extends Component {
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
      <div className="Builder">
        <Header />
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

export default Builder;
