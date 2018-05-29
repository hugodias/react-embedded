import React, { Component } from "react";

import "./Builder.css";
import { Icon, Row, Col } from "antd";
import { Input, Select, Rate, Form, Button, Modal, Spin, Avatar } from "antd";
import Profile from "../../Components/Profile";
import Header from "../../Components/Header";
import AvatarChooser from "../../Components/AvatarChooser";
import fire from "../../fire";
const FormItem = Form.Item;

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      modalVisible: false,
      key: null,
      form: {
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
    this.setState({ form, loading: false });
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

              <AvatarChooser />

              <Button.Group size="large">
                <Button type="primary" onClick={this.handleCreateEmbeddedCode}>
                  Generate embedded code<Icon type="right" />
                </Button>
              </Button.Group>
            </Form>
            <Modal
              title="Copy your embedded code"
              wrapClassName="vertical-center-modal"
              visible={this.state.modalVisible}
              onOk={() => this.setState({ modalVisible: false })}
              onCancel={() => this.setState({ modalVisible: false })}
            >
              <Spin spinning={this.state.loading}>
                <pre
                  style={{ width: "100%", border: "1px solid #777" }}
                >{`<iframe src="https://embedded-40bb4.firebaseapp.com/embedded/${
                  this.state.key
                }" border="0"></iframe>`}</pre>
              </Spin>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Builder;
