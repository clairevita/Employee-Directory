import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Employees extends Component {
    state = {
      image: "",
      first: "",
      last: "",
      email: "",
      username: "",
      city: "",
      country: ""
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
                last: res.data.results[0].name.last,
                email: res.data.results[0].email,
                username: res.data.results[0].login.username,
                city: res.data.results[0].location.city,
                country: res.data.results[0].location.country
            })
            )
            .catch(err => console.log(err));
      };

    render(){
        return (
            <div>
                <Card image={this.state.image} />
                <h1 className="text-center">{this.state.first} {this.state.last}</h1>
                <h2 className="text-center">{this.state.email} - {this.state.username}</h2>
                <h2  className="text-center">{this.state.city}, {this.state.country}</h2>
            </div>
        )
    }
}

export default Employees;