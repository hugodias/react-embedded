import React, { Component } from "react";
import { Avatar, Button, Row, Col } from "antd";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

class AvatarChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0]
    };
  }
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
    });
  };
  render() {
    return (
      <Row>
        {UserList.map(user => (
          <Col span={2}>
            <Avatar
              style={{
                backgroundColor: this.state.color,
                verticalAlign: "middle"
              }}
              size="large"
            >
              {user}
            </Avatar>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AvatarChooser;
