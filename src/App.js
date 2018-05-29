import React, { Component } from "react";
import Main from "./Main";
import { Layout, Menu, Icon, Row, Col } from "antd";
import { Input, Select, Rate, Form, Button, Modal, Spin, Avatar } from "antd";
import fire from "./fire";
import logo from "./Components/logo.svg";
import { Redirect } from "react-router";
import {withRouter} from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loading: true,
      embeds: [],
    };

    this.navigate = this.navigate.bind(this);
  }

  componentWillMount() {
    let embeddedRef = fire
      .database()
      .ref("embedded")
      .orderByKey()
      .limitToLast(100);
    embeddedRef.on("child_added", snapshot => {
      const id = { id: snapshot.key };
      const data = snapshot.val();
      const embedded = { ...id, ...data };
      this.setState({
        ...this.state,
        loading: false,
        embeds: [...this.state.embeds, embedded]
      });
    });
  }

  navigate = profile => {
    this.props.history.replace(`/profile/${profile.id}`)
  };

  render() {
    const { loading, embeds } = this.state;
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
      <Layout className="Builder">
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          {loading ? <Spin indicator={antIcon} /> : null}
          <Menu theme="dark" mode="inline">
            {embeds.map((profile, index) => (
              <Menu.Item
                key={index}
                onClick={this.navigate.bind(this, profile)}
              >
                <Icon type="user" />
                <span className="nav-text">{profile.name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header>
            <img src={logo} className="Header-logo" alt="logo" />
            Profile generator
          </Header>
          <Content>
            <Main />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
