import React, { Component } from "react";
import Profile from "../../Components/Profile";

class Embedded extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: null,
      website: null,
      rate: 0
    };
  }

  render() {
    return (
      <div className="Embedded">
        <Profile {...this.state} />
      </div>
    );
  }
}

export default Embedded;
