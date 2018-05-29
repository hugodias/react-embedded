import React, { Component } from "react";
import Profile from "../../Components/Profile";
import fire from "../../fire";

class Embedded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      website: null,
      rate: 0
    };
  }

  componentWillMount() {
    const embeddedId = this.props.match.params.id;
    fire.database().ref('/embedded/' + embeddedId).once('value').then(snapshot => {
      const data = snapshot.val();
      this.setState({...data});
      console.log(data);
    });
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
