import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
          <div>
        <div className="container mt-5 text-white">.</div>
            <div class="card-columns">
              <div class="card">
                <img src="https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Styling and Design</h5>
                  <p class="card-text">Let us know if you need some ideas. Our long portfolio may inspire you, and even spark a new direction.</p>
                </div>
            </div>
      <div class="card p-3">
        <blockquote class="blockquote mb-0 card-body">
          <p>We loved working with Steve and the team. They were always quick and easy to communicate!</p>
          <footer class="blockquote-footer">
            <small class="text-muted">
              Client in 2018
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card">
        <img src="https://images.pexels.com/photos/1504020/pexels-photo-1504020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">More than kitchens!</h5>
          <p class="card-text">We offer any space within your home. Let us know what you're thinking.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card bg-primary text-white text-center p-3">
        <blockquote class="blockquote mb-0">
          <p>"From blah to yah! We're so happy with our new remodel."</p>
        </blockquote>
      </div>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">You are in Control</h5>
          <p class="card-text">Ultimately, you are the designer. We are co-creators with you. This is your dream!</p>
        </div>
      </div>
      <div class="card">
        <img src="https://images.pexels.com/photos/94865/pexels-photo-94865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="card-img-top" alt="..."/>
      </div>
      <div class="card p-3 text-right">
        <blockquote class="blockquote mb-0">
          <p>Your price and quality preference dictactes. We will offer our recommended materials, but you can decide otherwise.</p>

        </blockquote>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">English and Spanish</h5>
          <p class="card-text">Our team is fluent in English and Spanish. Ready to chat!</p>
        </div>
      </div>
    </div>
        {/* <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container> */}
      </div>
    );
  }
}

export default Search;
