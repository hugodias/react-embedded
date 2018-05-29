import React, { Component } from "react";
import { Avatar, Button, Row, Col } from "antd";

class AvatarChooser extends Component {
  render() {
    return (
      <Row>
        {this.props.options.map((user, index) => (
          <Col key={index} span={3}>
            <Avatar
              style={{
                backgroundColor: user.color,
                verticalAlign: "middle"
              }}
              onClick={this.props.onAvatarClick}
              size="large"
            >
              {user.name}
            </Avatar>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AvatarChooser;
