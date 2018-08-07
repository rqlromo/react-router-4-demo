import React, { Component } from "react";
import { Link } from "react-router-dom";

class Detail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Detail of {this.props.pokemon.name}</h1>
      </div>
    );
  }
}

export default Detail;
