import React, { Component } from "react";


class Name extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(posts => this.setState({ posts }, () => console.log(posts)));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts}
        </ul>
      </div>
    );
  }
}
export default Name;