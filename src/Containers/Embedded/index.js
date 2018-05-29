import React, { PureComponent } from "react";
import Profile from "../../Components/Profile";
import fire from "../../fire";
import { METHODS } from "http";

class Embedded extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      website: null,
      rate: 0
    };
  }

  update() {
    console.log("mount");
    const embeddedId = this.props.match.params.id;
    console.log(embeddedId);
    fire
      .database()
      .ref("/embedded/" + embeddedId)
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();
        this.setState({ ...data });
        console.log(data);
      });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    return false;
  }

  componentWillUpdate() {
    this.update();
  }
  componentWillMount() {
    this.update();
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
