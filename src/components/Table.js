import React, { Component } from "react";
import Row from "./Row";
import API from "../utils/API";

class Table extends Component {
  state = {
    results: []
  };


  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Row results={this.state.results} />
      </div>
    );
  }
}

export default Table;
