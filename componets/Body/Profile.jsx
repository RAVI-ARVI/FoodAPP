import React from "react";

class Profile extends React.Component {
  constructor(propes) {
    super(propes);
    this.state = {
      name: "test",
    };
    console.log("contracter called", this.props.name);
  }
  componentDidMount() {
    // this.time = setInterval(() => {
    //   console.log("set time out");
    // }, 1000);
    console.log("component did mount", this.props.name);
  }
  componentDidUpdate() {
    console.log("componet did updated", this.props.name);
  }
  componentWillUnmount() {
    // clearInterval(this.time);
  }
  render() {
    console.log("render called", this.props.name);
    return (
      <>
        This is class base component {this.state.name}{" "}
        <button
          onClick={() => {
            this.setState({ name: "updated34" });
          }}
        >
          update
        </button>
      </>
    );
  }
}

export default Profile;
