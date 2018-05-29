import React from "react"
import { Card, Icon, Avatar} from "antd";
import { Input, Select, Rate, Form, Button } from "antd";
const { Meta } = Card;

const Profile = props => (
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
      title={props.name}
      description={props.website}
    />
    <Rate
      allowHalf
      disabled
      value={props.rate}
      style={{ width: 140, margin: "20px auto 0", display: "block" }}
    />
  </Card>
);

export default Profile;