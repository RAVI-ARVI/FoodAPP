import React from "react";
import Profile from "./Profile";
class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("contracter called parent");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component did mount called here api called parent");
  }
  componentDidUpdate() {
    console.log("componet updated parent");
  }
  componentWillUnmount() {
    console.log("the complonet will unmount called parent");
  }
  render() {
    console.log("rendaere called parent");
    return (
      <>
        <h3>count :{this.state.count}</h3>
        <Profile name="one" />
        <Profile name="two" />

        <Profile name="three" />
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          add
        </button>
      </>
    );
  }
}

export default ParentClass;
