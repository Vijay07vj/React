import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Chennai</h3>
        <h3>Contact : vijay@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
