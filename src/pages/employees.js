import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";
import Card from "../components/Card";

class Employees extends Component {
    state = {
      image: "",
      first: "",
      last: ""
    };
    componentDidMount() {
        this.getUser();
      }

      getUser = () => {
        API.getRandomUser()
        .then(res =>
            this.setState({
                image: res.data.results[0].picture.large,
                first: res.data.results[0].name.first,
                last: res.data.results[0].name.last
            })
            )
            .catch(err => console.log(err));
      };

    render(){
        return (
            <div>
                <Card image={this.state.image} />
                <h1 className="text-center">{this.state.first} {this.state.last}</h1>
            </div>
        )
    }
}

export default Employees;